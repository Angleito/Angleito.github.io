const { spawn } = require('child_process');
const path = require('path');

// Define your MCPs here, based on your mcp_config.json
const mcps = [
  {
    name: 'custom-mcp-bridge',
    command: 'node',
    args: ['/Users/angle/Documents/Projects/MCP/src/index.js'],
    env: {
      REQUESTY_API_KEY: 'sk-J008Vr9jSk6yh8LrZAcAxdcTRU3Kx3XyTnhlKgF19LksgjxF9uunnpTgSdOc/vHvxMUwo4PwDNQE71RvLTtuNxixzQI//Ma9vrP1skcwTAU=',
      OPENROUTER_API_KEY: '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',
      OPENAI_API_KEY: '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',
      ANTHROPIC_API_KEY: 'sk-SQrftdTATliaWsZY2++ch/Bsm9+oOFbb40XNabxM4Wri4Vkc/TE/Wh0z+cdXBxerxxbbH/8B9qM/aMk0lKH6cN6AXYg5kYbOS2YUIGGMBQc=',
      PERPLEXITY_API_KEY: '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',
    },
  },
  {
    name: 'puppeteer',
    command: 'npx',
    args: ['-y', '@modelcontextprotocol/server-puppeteer'],
    env: {},
  },
  {
    name: 'playwright',
    command: 'npx',
    args: ['-y', '@executeautomation/playwright-mcp-server'],
    env: {},
  },
  {
    name: 'sequential-thinking',
    command: 'npx',
    args: ['-y', '@modelcontextprotocol/server-sequential-thinking'],
    env: {},
  },
  {
    name: 'perplexity-search',
    command: 'npx',
    args: ['-y', '@smithery/cli@latest', 'run', '@arjunkmrm/perplexity-search', '--key', '0fe62a35-b670-41e1-8120-aa8ac09d191c'],
    env: { perplexityapikey: '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' },
  },
  {
    name: 'task-master-ai',
    command: 'npx',
    args: ['-y', 'task-master-mcp'],
    env: {
      ANTHROPIC_API_KEY: 'sk-SQrftdTATliaWsZY2++ch/Bsm9+oOFbb40XNabxM4Wri4Vkc/TE/Wh0z+cdXBxerxxbbH/8B9qM/aMk0lKH6cN6AXYg5kYbOS2YUIGGMBQc=',
      PERPLEXITY_API_KEY: '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',
      MODEL: 'claude-3-7-sonnet-20250219',
      PERPLEXITY_MODEL: 'sonar-pro',
      MAX_TOKENS: '64000',
      TEMPERATURE: '0.2',
      DEFAULT_SUBTASKS: '5',
      DEFAULT_PRIORITY: 'medium',
    },
  },
];

function testMCP(mcp) {
  return new Promise((resolve) => {
    console.log(`\nTesting MCP: ${mcp.name}`);
    const proc = spawn(mcp.command, mcp.args, {
      env: { ...process.env, ...mcp.env },
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let output = '';
    let error = '';
    let timer;
    proc.stdout.on('data', (data) => {
      output += data.toString();
    });
    proc.stderr.on('data', (data) => {
      error += data.toString();
    });
    proc.on('error', (err) => {
      clearTimeout(timer);
      resolve({ name: mcp.name, success: false, error: err.message });
    });
    // Kill after 10 seconds
    timer = setTimeout(() => {
      proc.kill('SIGKILL');
      resolve({ name: mcp.name, success: error.length === 0, output, error });
    }, 10000);
    proc.on('exit', (code) => {
      clearTimeout(timer);
      resolve({ name: mcp.name, success: code === 0, output, error });
    });
  });
}

(async () => {
  for (const mcp of mcps) {
    // eslint-disable-next-line no-await-in-loop
    const result = await testMCP(mcp);
    console.log(`--- ${result.name} ---`);
    if (result.success) {
      console.log('✅ Success');
    } else {
      console.log('❌ Failed');
    }
    if (result.output) {
      console.log('Output:', result.output);
    }
    if (result.error) {
      console.log('Error:', result.error);
    }
    console.log('-------------------\n');
  }
})();

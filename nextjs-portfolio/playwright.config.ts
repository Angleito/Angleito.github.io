import { defineConfig } from '@playwright/test';

export default defineConfig({
  webServer: {
    command: 'PORT=3100 npm run start',
    port: 3100,
    timeout: 120 * 1000,
    reuseExistingServer: true,
  },
  use: {
    baseURL: 'http://localhost:3100',
    headless: true,
  },
  testDir: './tests',
});

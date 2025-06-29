export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  categories: string[];
  author: string;
  url: string;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  techStack: string[];
  github?: string;
  url: string;
}

// Temporary mock data to get the build working
export function loadPosts(): Post[] {
  return [
    {
      slug: 'sui-valyrian-steel',
      title: 'SUI: The Valyrian Steel of Blockchains',
      date: '2025-03-29',
      excerpt: 'Exploring the SUI blockchain and its unique features',
      categories: ['crypto', 'development'],
      author: 'Angel Romero',
      url: '/posts/sui-valyrian-steel/'
    },
    {
      slug: 'trumps-vegas-gamble',
      title: 'Trump\'s Vegas Gamble',
      date: '2024-03-29',
      excerpt: 'Analysis of political and economic implications',
      categories: ['economics', 'politics'],
      author: 'Angel Romero',
      url: '/posts/trumps-vegas-gamble/'
    }
  ];
}

export function loadProjects(): Project[] {
  return [
    {
      slug: 'bluefinaiagenttrader',
      name: 'BlueFin AI Agent Trader',
      description: 'AI-powered trading agent for DeFi',
      techStack: ['TypeScript', 'AI', 'DeFi'],
      github: 'https://github.com/Angleito/bluefinaiagenttrader',
      url: '/projects/bluefinaiagenttrader/'
    },
    {
      slug: 'flashloanbot',
      name: 'Flash Loan Bot',
      description: 'Automated flash loan arbitrage bot',
      techStack: ['Solidity', 'TypeScript', 'DeFi'],
      github: 'https://github.com/Angleito/flashloanbot',
      url: '/projects/flashloanbot/'
    }
  ];
}

export function loadPostBySlug(slug: string): Post | undefined {
  return loadPosts().find(post => post.slug === slug);
}

export function loadProjectBySlug(slug: string): Project | undefined {
  return loadProjects().find(project => project.slug === slug);
}

export function loadCategories(): string[] {
  const allCategories = loadPosts().flatMap(post => post.categories);
  return Array.from(new Set(allCategories));
}

export function loadPostsByCategory(category: string): Post[] {
  return loadPosts().filter(post => 
    post.categories.includes(category)
  );
}
# Docusaurus Configuration Guide

## Setup Instructions (Future Implementation)

### 1. Installation
```bash
# Install Docusaurus
npm install @docusaurus/core @docusaurus/preset-classic

# Install additional plugins
npm install @docusaurus/plugin-content-docs
npm install @docusaurus/theme-mermaid
```

### 2. Configuration File
```javascript
// docusaurus.config.js
const config = {
  title: 'Diego Quintana - Design System',
  tagline: 'Portfolio Design System Documentation',
  url: 'https://diegoquintanadeitu.github.io',
  baseUrl: '/design-system/',
  
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/diegoquintanadeitu/diegoquintanadeitu/tree/main/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [
    '@docusaurus/theme-mermaid'
  ],

  themeConfig: {
    navbar: {
      title: 'Design System',
      items: [
        {
          type: 'doc',
          docId: 'design-system/README',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/diegoquintanadeitu/diegoquintanadeitu',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
  },
};

module.exports = config;
```

### 3. Sidebar Configuration
```javascript
// sidebars.js
const sidebars = {
  designSystemSidebar: [
    'design-system/README',
    {
      type: 'category',
      label: 'Foundations',
      items: [
        'design-system/animations',
        'design-system/tokens',
        'design-system/colors',
        'design-system/typography',
        'design-system/spacing',
      ],
    },
    {
      type: 'category', 
      label: 'Components',
      items: [
        'design-system/components/buttons',
        'design-system/components/cards',
        'design-system/components/navigation',
      ],
    },
  ],
};

module.exports = sidebars;
```

### 4. Custom CSS
```css
/* src/css/custom.css */
:root {
  --ifm-color-primary: #3b82f6;
  --ifm-color-primary-dark: #2563eb;
  --ifm-color-primary-darker: #1d4ed8;
  --ifm-color-primary-darkest: #1e40af;
  --ifm-color-primary-light: #60a5fa;
  --ifm-color-primary-lighter: #93c5fd;
  --ifm-color-primary-lightest: #dbeafe;
  --ifm-code-font-size: 95%;
}

/* Live code examples */
.docusaurus-highlight-code-line {
  background-color: rgba(0, 0, 0, 0.1);
  display: block;
  margin: 0 calc(-1 * var(--ifm-pre-padding));
  padding: 0 var(--ifm-pre-padding);
}

/* Animation examples */
.demo-button {
  @apply btn-scale-animation bg-blue-600 text-white px-4 py-2 rounded;
}
```

---

## Storybook Configuration (Future)

### 1. Installation
```bash
# Install Storybook for Astro
npx storybook@latest init --type astro

# Additional addons
npm install @storybook/addon-a11y
npm install @storybook/addon-design-tokens
```

### 2. Main Configuration
```javascript
// .storybook/main.js
export default {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|astro)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-design-tokens',
  ],
  framework: {
    name: '@storybook/astro',
    options: {},
  },
};
```

### 3. Design Tokens Integration
```javascript
// .storybook/preview.js
import { withDesignTokens } from '@storybook/addon-design-tokens';

export const decorators = [withDesignTokens];

export const parameters = {
  designToken: {
    defaultTab: 'Colors',
    tabs: [
      { label: 'Colors', type: 'color' },
      { label: 'Typography', type: 'typography' },
      { label: 'Spacing', type: 'spacing' },
      { label: 'Animations', type: 'motion' },
    ],
  },
};
```

---

## Deployment Configuration

### GitHub Actions (Docusaurus)
```yaml
# .github/workflows/docs.yml
name: Deploy Design System Docs

on:
  push:
    branches: [main]
    paths: ['docs/**']

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          
      - name: Install dependencies
        run: npm install
        
      - name: Build docs
        run: npm run docs:build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./docs/build
```

### Vercel Configuration
```json
{
  "builds": [
    {
      "src": "docs/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
  ],
  "routes": [
    {
      "src": "/design-system/(.*)",
      "dest": "/design-system/$1"
    }
  ]
}
```

---

**Status**: Configuration ready for future implementation  
**Next Steps**: 
1. Complete color and typography documentation
2. Set up Docusaurus when ready to deploy
3. Create Storybook stories for existing components
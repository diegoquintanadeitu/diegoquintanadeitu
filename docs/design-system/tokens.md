# Design Tokens - Animation System

## Overview

Este archivo define los tokens de diseño para el sistema de animaciones, preparados para integración con herramientas de build y generación automática de CSS.

## Animation Tokens

### Duration Tokens
```json
{
  "animation": {
    "duration": {
      "instant": "0ms",
      "fast": "100ms", 
      "normal": "200ms",
      "slow": "300ms",
      "slower": "500ms"
    }
  }
}
```

### Easing Tokens
```json
{
  "animation": {
    "easing": {
      "linear": "linear",
      "ease-in": "ease-in",
      "ease-out": "ease-out", 
      "ease-in-out": "ease-in-out",
      "material-standard": "cubic-bezier(0.4, 0, 0.2, 1)",
      "material-decelerate": "cubic-bezier(0.0, 0.0, 0.2, 1)",
      "material-accelerate": "cubic-bezier(0.4, 0, 1, 1)"
    }
  }
}
```

### Transform Tokens
```json
{
  "animation": {
    "scale": {
      "none": "1",
      "hover": "1.05", 
      "active": "0.95",
      "emphasis": "1.1",
      "subtle": "1.02"
    },
    "translate": {
      "none": "0",
      "subtle": "2px",
      "normal": "4px",
      "emphasis": "8px"
    }
  }
}
```

## CSS Custom Properties

### Generated Variables
```css
:root {
  /* Duration */
  --animation-duration-instant: 0ms;
  --animation-duration-fast: 100ms;
  --animation-duration-normal: 200ms;
  --animation-duration-slow: 300ms;
  --animation-duration-slower: 500ms;
  
  /* Easing */
  --animation-easing-linear: linear;
  --animation-easing-material-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --animation-easing-material-decelerate: cubic-bezier(0.0, 0.0, 0.2, 1);
  --animation-easing-material-accelerate: cubic-bezier(0.4, 0, 1, 1);
  
  /* Scale */
  --animation-scale-none: 1;
  --animation-scale-hover: 1.05;
  --animation-scale-active: 0.95;
  --animation-scale-emphasis: 1.1;
  --animation-scale-subtle: 1.02;
  
  /* Translate */
  --animation-translate-none: 0;
  --animation-translate-subtle: 2px;
  --animation-translate-normal: 4px;
  --animation-translate-emphasis: 8px;
}
```

## Component Animation Specs

### Button Scale Animation
```css
.btn-scale-animation {
  transition: transform var(--animation-duration-normal) var(--animation-easing-material-standard);
}

.btn-scale-animation:hover {
  transform: scale(var(--animation-scale-hover));
}

.btn-scale-animation:active {
  transform: scale(var(--animation-scale-active));
}
```

### Future: Card Hover Animation
```css
.card-hover-animation {
  transition: 
    transform var(--animation-duration-normal) var(--animation-easing-material-standard),
    box-shadow var(--animation-duration-normal) var(--animation-easing-material-standard);
}

.card-hover-animation:hover {
  transform: translateY(calc(-1 * var(--animation-translate-normal)));
}
```

## Storybook Controls Configuration

### Animation Controls
```javascript
// Para futura implementación en Storybook
export const animationControls = {
  duration: {
    control: 'select',
    options: ['instant', 'fast', 'normal', 'slow', 'slower'],
    defaultValue: 'normal'
  },
  easing: {
    control: 'select', 
    options: [
      'linear',
      'ease-in-out',
      'material-standard', 
      'material-decelerate',
      'material-accelerate'
    ],
    defaultValue: 'material-standard'
  },
  scale: {
    control: 'select',
    options: ['none', 'subtle', 'hover', 'emphasis'],
    defaultValue: 'hover'
  }
};
```

## Build Integration

### Style Dictionary Configuration
```javascript
// style-dictionary.config.js (futuro)
module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/styles/',
      files: [{
        destination: 'design-tokens.css',
        format: 'css/variables'
      }]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'src/tokens/',
      files: [{
        destination: 'animations.js',
        format: 'javascript/es6'
      }]
    }
  }
};
```

### PostCSS Plugin Configuration
```javascript
// postcss.config.js (futuro)
module.exports = {
  plugins: [
    require('postcss-design-tokens')({
      tokens: './tokens/animations.json',
      prefix: '--ds'
    })
  ]
};
```

---

**Note**: Este archivo está preparado para futuras implementaciones automatizadas con herramientas como Style Dictionary, Figma Tokens, o sistemas similares.
# 🎨 Design System Component Library

A beautiful, pixel-perfect Vue 3 component library built with Storybook, featuring components directly translated from Figma designs.

## ✨ Features

- **🎯 Pixel-Perfect Components** - Built to match Figma designs exactly
- **📚 Storybook Integration** - Interactive component documentation
- **🔧 Vue 3 + TypeScript** - Modern development stack
- **🎨 FontAwesome Pro Icons** - Professional icon library
- **📱 Responsive Design** - Mobile-first approach
- **♿ Accessible** - WCAG compliant components

## 🚀 Components

### IconColorPicker
A comprehensive icon and color picker component featuring:
- **240+ FontAwesome Pro icons** organized by categories
- **Searchable icon grid** with smooth scrolling
- **Color palette** with predefined design system colors
- **Custom color input** with hex value support
- **Figma-accurate styling** with proper shadows and selection states

### ControlTile  
Atomic control components with:
- **Multiple variants** (primary, secondary, etc.)
- **Icon + control combinations** with mutual exclusivity
- **Hover and active states** matching design specifications
- **Clean, minimal API** for easy integration

## 🛠 Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Getting Started

```bash
# Install dependencies
npm install

# Start Storybook development server
npm run storybook

# Build for production
npm run build-storybook
```

## 🌐 Deployment

This project is configured for automatic deployment to Netlify:

### Option 1: One-Click Deploy
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=YOUR_REPO_URL)

### Option 2: Manual Deploy
1. Build the project: `npm run build-storybook`
2. Upload the `storybook-static` folder to your hosting service
3. Configure your server to serve `/index.html` for all routes

### Option 3: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=storybook-static
```

## 📁 Project Structure

```
src/
├── components/           # Vue components
│   ├── IconColorPicker.vue
│   └── ControlTile.vue
├── stories/             # Storybook stories
│   ├── IconColorPicker.stories.ts
│   └── ControlTile.stories.ts
└── assets/             # Static assets

.storybook/             # Storybook configuration
├── main.ts
└── preview.ts

storybook-static/       # Built Storybook (after build)
```

## 🎨 Design System

This library implements components from a comprehensive design system featuring:

- **Consistent Color Palette** - Neutrals, primary, and semantic colors
- **Typography Scale** - Inter font family with proper weights
- **Spacing System** - 4px grid-based spacing
- **Component States** - Hover, active, disabled, and selected states
- **Shadows & Effects** - Subtle elevation and depth

## 🔧 Usage

```vue
<template>
  <IconColorPicker 
    v-model="selectedIconColor"
    @icon-selected="onIconSelected"
    @color-selected="onColorSelected"
  />
</template>

<script setup>
import { ref } from 'vue'
import IconColorPicker from './components/IconColorPicker.vue'

const selectedIconColor = ref(null)

const onIconSelected = (icon) => {
  console.log('Selected icon:', icon)
}

const onColorSelected = (color) => {
  console.log('Selected color:', color)
}
</script>
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-component`
3. Make your changes and add stories
4. Test with Storybook: `npm run storybook`
5. Commit your changes: `git commit -m 'Add amazing component'`
6. Push to the branch: `git push origin feature/amazing-component`
7. Open a Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) for details

## 🙏 Acknowledgments

- Built with [Storybook](https://storybook.js.org/)
- Icons by [FontAwesome Pro](https://fontawesome.com/)
- Styled with love and attention to Figma details ❤️

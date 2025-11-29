# Vue Design System

A comprehensive Vue 3 design system component library built with TypeScript and Vite.

## Installation

```bash
npm install @your-org/vue-design-system
```

## Usage

### Global Installation

```javascript
import { createApp } from 'vue'
import VueDesignSystem from '@your-org/vue-design-system'
import '@your-org/vue-design-system/style'

const app = createApp(App)
app.use(VueDesignSystem)
app.mount('#app')
```

### Individual Component Import

```javascript
import { Button, Avatar, Badge } from '@your-org/vue-design-system'
import '@your-org/vue-design-system/style'

export default {
  components: {
    Button,
    Avatar,
    Badge
  }
}
```

### In Template

```vue
<template>
  <div>
    <Button variant="primary" size="medium">Click me</Button>
    <Avatar src="/path/to/image.jpg" alt="User avatar" size="large" />
    <Badge text="New" variant="success" />
  </div>
</template>
```

## Available Components

- **Avatar** - User profile images with different sizes and shapes
- **Badge** - Status indicators and labels
- **Button** - Interactive buttons with multiple variants
- **CloseAction** - Close button component
- **ColorPalette** - Color selection interface
- **ColorSwatch** - Individual color swatches
- **ContentArea** - Content container component
- **Control** - Form control wrapper
- **ControlLine** - Control layout component
- **ControlTile** - Tile-based control component
- **DatePicker** - Date selection component
- **HexColorInput** - Hex color input field
- **Icon** - Icon component
- **IconColorPicker** - Icon with color picker
- **IconGrid** - Grid layout for icons
- **ModalCard** - Modal dialog component
- **ModalFooter** - Modal footer component
- **ModalHeader** - Modal header component
- **SearchInput** - Search input field
- **SnackBar** - Notification component

## Component Props

### Button
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'small' | 'medium' | 'large'
- `disabled`: boolean
- `loading`: boolean

### Avatar
- `src`: string (image URL)
- `alt`: string (alt text)
- `size`: 'small' | 'medium' | 'large'
- `shape`: 'circle' | 'square'

### Badge
- `text`: string
- `variant`: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
- `size`: 'small' | 'medium' | 'large'

### DatePicker
- `modelValue`: Date | string
- `placeholder`: string
- `disabled`: boolean
- `format`: string

### ModalCard
- `modelValue`: boolean
- `title`: string
- `width`: string
- `closeOnOverlayClick`: boolean

### SearchInput
- `modelValue`: string
- `placeholder`: string
- `disabled`: boolean
- `clearable`: boolean

### SnackBar
- `modelValue`: boolean
- `message`: string
- `type`: 'success' | 'error' | 'warning' | 'info'
- `duration`: number

## 📖 Storybook

View the interactive component library and documentation:
- **Local Development**: `npm run storybook`
- **Deploy to Web**: See [STORYBOOK-DEPLOYMENT.md](./STORYBOOK-DEPLOYMENT.md)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start Storybook
npm run storybook

# Build library
npm run build:lib

# Build Storybook
npm run build-storybook

# Deploy Storybook
npm run deploy-storybook
```

## Publishing

```bash
# Build the library
npm run build:lib

# Publish to npm
npm publish
```

## License

MIT

import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Documentation/Installation',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Installation Guide

Welcome to the Vue Design System! This guide will help you install and start using our component library in your Vue 3 projects.

## Installation

### NPM Package (Recommended)

\`\`\`bash
npm install @your-org/vue-design-system
\`\`\`

### Yarn

\`\`\`bash
yarn add @your-org/vue-design-system
\`\`\`

### PNPM

\`\`\`bash
pnpm add @your-org/vue-design-system
\`\`\`

## Quick Start

### Option 1: Global Installation (All Components)

\`\`\`javascript
import { createApp } from 'vue'
import VueDesignSystem from '@your-org/vue-design-system'
import '@your-org/vue-design-system/style'

const app = createApp(App)
app.use(VueDesignSystem)
app.mount('#app')
\`\`\`

### Option 2: Individual Components

\`\`\`javascript
import { Button, Avatar, Badge } from '@your-org/vue-design-system'
import '@your-org/vue-design-system/style'

export default {
  components: {
    Button,
    Avatar,
    Badge
  }
}
\`\`\`

## Usage Examples

### Basic Button

\`\`\`vue
<template>
  <Button variant="primary" size="medium">
    Click me
  </Button>
</template>
\`\`\`

### Avatar Component

\`\`\`vue
<template>
  <Avatar 
    src="/path/to/image.jpg" 
    alt="User avatar" 
    size="large" 
  />
</template>
\`\`\`

### Badge Component

\`\`\`vue
<template>
  <Badge text="New" variant="success" />
</template>
\`\`\`

## Available Components

| Component | Description | Import |
|-----------|-------------|---------|
| Avatar | User profile images | \`import { Avatar }\` |
| Badge | Status indicators | \`import { Badge }\` |
| Button | Interactive buttons | \`import { Button }\` |
| DatePicker | Date selection | \`import { DatePicker }\` |
| ModalCard | Modal dialogs | \`import { ModalCard }\` |
| SearchInput | Search fields | \`import { SearchInput }\` |
| SnackBar | Notifications | \`import { SnackBar }\` |
| CloseAction | Close button | \`import { CloseAction }\` |
| ColorPalette | Color selection | \`import { ColorPalette }\` |
| ColorSwatch | Color swatches | \`import { ColorSwatch }\` |
| ContentArea | Content container | \`import { ContentArea }\` |
| Control | Form control | \`import { Control }\` |
| ControlLine | Control layout | \`import { ControlLine }\` |
| ControlTile | Tile control | \`import { ControlTile }\` |
| HexColorInput | Hex color input | \`import { HexColorInput }\` |
| Icon | Icon component | \`import { Icon }\` |
| IconColorPicker | Icon with color picker | \`import { IconColorPicker }\` |
| IconGrid | Icon grid layout | \`import { IconGrid }\` |
| ModalFooter | Modal footer | \`import { ModalFooter }\` |
| ModalHeader | Modal header | \`import { ModalHeader }\` |

## Requirements

- **Vue**: 3.x or higher
- **Node.js**: 16+ (for installation)
- **Package Manager**: npm, yarn, or pnpm

## Troubleshooting

### Installation Issues

\`\`\`bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Or with yarn
rm -rf node_modules yarn.lock
yarn install
\`\`\`

### Component Not Loading

1. Check that the component is properly imported
2. Verify the component is registered in your Vue app
3. Ensure styles are imported: \`import '@your-org/vue-design-system/style'\`

### Styling Issues

1. Make sure CSS is imported after component imports
2. Check for CSS conflicts with your existing styles
3. Verify FontAwesome is loading correctly

## Getting Help

- **GitHub Issues**: Report bugs and request features
- **Documentation**: Check component stories for detailed examples
- **Community**: Join our community discussions
        `
      }
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Guide: Story = {
  render: () => ({
    template: `
      <div style="padding: 20px; max-width: 1200px; font-family: Inter, sans-serif;">
        <h1 style="color: #000f30; margin-bottom: 16px;">📦 Installation Guide</h1>
        <p style="color: #476887; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
          Welcome to the Vue Design System! This guide will help you install and start using our component library in your Vue 3 projects.
        </p>
        
        <h2 style="color: #000f30; margin-bottom: 16px;">🚀 Installation</h2>
        <div style="background: #f6f9fb; padding: 16px; border-radius: 8px; border: 1px solid #e5ecf3; margin-bottom: 24px;">
          <h3 style="color: #000f30; margin-bottom: 12px;">NPM Package (Recommended)</h3>
          <pre style="background: #ffffff; padding: 12px; border-radius: 6px; overflow-x: auto; border: 1px solid #e5ecf3; margin: 0;">npm install @your-org/vue-design-system</pre>
        </div>
        
        <h2 style="color: #000f30; margin-bottom: 16px;">⚡ Quick Start</h2>
        <div style="background: #f6f9fb; padding: 16px; border-radius: 8px; border: 1px solid #e5ecf3; margin-bottom: 24px;">
          <h3 style="color: #000f30; margin-bottom: 12px;">Global Installation (All Components)</h3>
          <pre style="background: #ffffff; padding: 12px; border-radius: 6px; overflow-x: auto; border: 1px solid #e5ecf3; margin: 0; font-size: 14px;">import { createApp } from 'vue'
import VueDesignSystem from '@your-org/vue-design-system'
import '@your-org/vue-design-system/style'

const app = createApp(App)
app.use(VueDesignSystem)
app.mount('#app')</pre>
        </div>
        
        <h2 style="color: #000f30; margin-bottom: 16px;">📚 Available Components</h2>
        <div style="background: #f6f9fb; padding: 16px; border-radius: 8px; border: 1px solid #e5ecf3; margin-bottom: 24px;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;">
            <div style="background: #ffffff; padding: 12px; border-radius: 6px; border: 1px solid #e5ecf3;">
              <strong style="color: #000f30;">Avatar</strong><br>
              <span style="color: #476887; font-size: 14px;">User profile images</span>
            </div>
            <div style="background: #ffffff; padding: 12px; border-radius: 6px; border: 1px solid #e5ecf3;">
              <strong style="color: #000f30;">Badge</strong><br>
              <span style="color: #476887; font-size: 14px;">Status indicators</span>
            </div>
            <div style="background: #ffffff; padding: 12px; border-radius: 6px; border: 1px solid #e5ecf3;">
              <strong style="color: #000f30;">Button</strong><br>
              <span style="color: #476887; font-size: 14px;">Interactive buttons</span>
            </div>
            <div style="background: #ffffff; padding: 12px; border-radius: 6px; border: 1px solid #e5ecf3;">
              <strong style="color: #000f30;">DatePicker</strong><br>
              <span style="color: #476887; font-size: 14px;">Date selection</span>
            </div>
            <div style="background: #ffffff; padding: 12px; border-radius: 6px; border: 1px solid #e5ecf3;">
              <strong style="color: #000f30;">ModalCard</strong><br>
              <span style="color: #476887; font-size: 14px;">Modal dialogs</span>
            </div>
            <div style="background: #ffffff; padding: 12px; border-radius: 6px; border: 1px solid #e5ecf3;">
              <strong style="color: #000f30;">SearchInput</strong><br>
              <span style="color: #476887; font-size: 14px;">Search fields</span>
            </div>
            <div style="background: #ffffff; padding: 12px; border-radius: 6px; border: 1px solid #e5ecf3;">
              <strong style="color: #000f30;">SnackBar</strong><br>
              <span style="color: #476887; font-size: 14px;">Notifications</span>
            </div>
            <div style="background: #ffffff; padding: 12px; border-radius: 6px; border: 1px solid #e5ecf3;">
              <strong style="color: #000f30;">And 13 more!</strong><br>
              <span style="color: #476887; font-size: 14px;">Explore the sidebar</span>
            </div>
          </div>
        </div>
        
        <h2 style="color: #000f30; margin-bottom: 16px;">🔧 Requirements</h2>
        <ul style="color: #476887; line-height: 1.6; margin-bottom: 24px;">
          <li><strong style="color: #000f30;">Vue</strong>: 3.x or higher</li>
          <li><strong style="color: #000f30;">Node.js</strong>: 16+ (for installation)</li>
          <li><strong style="color: #000f30;">Package Manager</strong>: npm, yarn, or pnpm</li>
        </ul>
        
        <h2 style="color: #000f30; margin-bottom: 16px;">🆘 Troubleshooting</h2>
        <div style="background: #f6f9fb; padding: 16px; border-radius: 8px; border: 1px solid #e5ecf3;">
          <h3 style="color: #000f30; margin-bottom: 12px;">Installation Issues</h3>
          <pre style="background: #ffffff; padding: 12px; border-radius: 6px; overflow-x: auto; border: 1px solid #e5ecf3; margin: 0; font-size: 14px;"># Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install</pre>
        </div>
      </div>
    `
  })
};

import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Getting Started/Introduction',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# Welcome to Vue Design System

This is a comprehensive Vue 3 design system with 20+ components.

## Quick Installation

\`\`\`bash
npm install @your-org/vue-design-system
\`\`\`

## Usage

\`\`\`javascript
import { createApp } from 'vue'
import VueDesignSystem from '@your-org/vue-design-system'
import '@your-org/vue-design-system/style'

const app = createApp(App)
app.use(VueDesignSystem)
app.mount('#app')
\`\`\`

## Available Components

- **Avatar** - User profile images
- **Badge** - Status indicators  
- **Button** - Interactive buttons
- **DatePicker** - Date selection
- **ModalCard** - Modal dialogs
- **SearchInput** - Search fields
- **SnackBar** - Notifications
- **And 13 more!**

## Design Tokens

### Colors
- **Primary**: #338eea
- **Success**: #25bd5d
- **Warning**: #e3b212
- **Error**: #e42e2e
- **Info**: #0072e5

### Typography
- **Font Family**: Inter
- **Title**: 16px, Semi Bold (600)
- **Description**: 14px, Regular (400)
- **Button Text**: 12px, Semi Bold (600)

### Spacing
- **Padding**: 20px (header), 16px (content), 12px (footer)
- **Gap**: 8px (header), 16px (content), 24px (footer)
- **Border Radius**: 10px (modal), 6px (buttons), 4px (icons)

## Getting Help

Check out the individual component stories in the sidebar for detailed examples and interactive demos!
        `
      }
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Welcome: Story = {
  render: () => ({
    template: `
      <div style="padding: 20px; max-width: 1200px; font-family: Inter, sans-serif;">
        <h1 style="color: #000f30; margin-bottom: 16px;">🎉 Welcome to Vue Design System!</h1>
        <p style="color: #476887; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
          This is your comprehensive Vue 3 design system with 20+ carefully crafted components.
        </p>
        
        <h2 style="color: #000f30; margin-bottom: 16px;">🚀 Quick Start</h2>
        <pre style="background: #f6f9fb; padding: 16px; border-radius: 8px; overflow-x: auto; border: 1px solid #e5ecf3; margin-bottom: 24px;">
npm install @your-org/vue-design-system

import { createApp } from 'vue'
import VueDesignSystem from '@your-org/vue-design-system'
import '@your-org/vue-design-system/style'

const app = createApp(App)
app.use(VueDesignSystem)
app.mount('#app')
        </pre>
        
        <h2 style="color: #000f30; margin-bottom: 16px;">📚 Available Components</h2>
        <ul style="color: #476887; line-height: 1.6; margin-bottom: 24px;">
          <li><strong style="color: #000f30;">Avatar</strong> - User profile images</li>
          <li><strong style="color: #000f30;">Badge</strong> - Status indicators</li>
          <li><strong style="color: #000f30;">Button</strong> - Interactive buttons</li>
          <li><strong style="color: #000f30;">DatePicker</strong> - Date selection</li>
          <li><strong style="color: #000f30;">ModalCard</strong> - Modal dialogs</li>
          <li><strong style="color: #000f30;">SearchInput</strong> - Search fields</li>
          <li><strong style="color: #000f30;">SnackBar</strong> - Notifications</li>
          <li>And 13 more components!</li>
        </ul>
        
        <h2 style="color: #000f30; margin-bottom: 16px;">🎨 Design Tokens</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px; margin: 16px 0 24px 0;">
          <div style="background: #338eea; color: white; padding: 12px; border-radius: 6px; text-align: center; font-weight: 600;">
            <strong>Primary</strong><br>#338eea
          </div>
          <div style="background: #25bd5d; color: white; padding: 12px; border-radius: 6px; text-align: center; font-weight: 600;">
            <strong>Success</strong><br>#25bd5d
          </div>
          <div style="background: #e3b212; color: white; padding: 12px; border-radius: 6px; text-align: center; font-weight: 600;">
            <strong>Warning</strong><br>#e3b212
          </div>
          <div style="background: #e42e2e; color: white; padding: 12px; border-radius: 6px; text-align: center; font-weight: 600;">
            <strong>Error</strong><br>#e42e2e
          </div>
        </div>
        
        <h2 style="color: #000f30; margin-bottom: 16px;">📖 Next Steps</h2>
        <p style="color: #476887; line-height: 1.6;">
          Explore the components in the sidebar to see interactive examples and detailed documentation!
        </p>
      </div>
    `
  })
};

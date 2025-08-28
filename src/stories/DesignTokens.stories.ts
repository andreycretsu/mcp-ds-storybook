import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Design System/Design Tokens',
  parameters: {
    docs: {
      description: {
        component: `
# Design Tokens

Our design system is built on a foundation of consistent design tokens that ensure visual harmony across all components.

## Color Palette

### Primary Colors
- **Primary Blue**: #338eea
- **Success Green**: #25bd5d
- **Warning Yellow**: #e3b212
- **Error Red**: #e42e2e
- **Info Blue**: #0072e5

### Text Colors
- **Text Dark**: #000f30
- **Text Medium**: #476887

### Background Colors
- **Background Light**: #f6f9fb
- **Border Light**: #e5ecf3

## Typography

### Font Family
**Inter** - A modern, highly legible font designed for user interfaces.

### Typography Scale
| Element | Font Size | Font Weight | Use Case |
|---------|-----------|-------------|----------|
| Title | 16px | 600 (Semi Bold) | Modal titles, section headers |
| Description | 14px | 400 (Regular) | Modal descriptions, body text |
| Button Text | 12px | 600 (Semi Bold) | Button labels, action text |
| Label | 10px | 500 (Medium) | Form labels, small text |

## Spacing

### Spacing Scale
| Size | Value | Use Case |
|------|-------|----------|
| xs | 4px | Minimal spacing, tight layouts |
| sm | 8px | Component internal spacing |
| md | 12px | Footer padding, small gaps |
| lg | 16px | Content padding, standard gaps |
| xl | 20px | Header padding, large gaps |
| xxl | 24px | Footer gaps, major spacing |

## Border Radius

| Size | Value | Use Case |
|------|-------|----------|
| Small | 4px | Icons, small elements |
| Medium | 6px | Buttons, form inputs |
| Large | 10px | Modal cards, containers |

## CSS Variables

You can access these design tokens as CSS variables:

\`\`\`css
:root {
  /* Colors */
  --color-primary: #338eea;
  --color-success: #25bd5d;
  --color-warning: #e3b212;
  --color-error: #e42e2e;
  --color-info: #0072e5;
  
  /* Text Colors */
  --color-text-dark: #000f30;
  --color-text-medium: #476887;
  
  /* Background Colors */
  --color-bg-light: #f6f9fb;
  --color-border-light: #e5ecf3;
  
  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-lg: 16px;
  --spacing-xl: 20px;
  --spacing-xxl: 24px;
  
  /* Border Radius */
  --radius-small: 4px;
  --radius-medium: 6px;
  --radius-large: 10px;
}
\`\`\`
        `
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  render: () => ({
    template: `
      <div style="padding: 20px; max-width: 800px;">
        <h1>🎨 Design Tokens</h1>
        
        <h2>Primary Colors</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; margin: 16px 0;">
          <div style="background: #338eea; color: white; padding: 16px; border-radius: 8px; text-align: center;">
            <strong>Primary Blue</strong><br>#338eea
          </div>
          <div style="background: #25bd5d; color: white; padding: 16px; border-radius: 8px; text-align: center;">
            <strong>Success Green</strong><br>#25bd5d
          </div>
          <div style="background: #e3b212; color: white; padding: 16px; border-radius: 8px; text-align: center;">
            <strong>Warning Yellow</strong><br>#e3b212
          </div>
          <div style="background: #e42e2e; color: white; padding: 16px; border-radius: 8px; text-align: center;">
            <strong>Error Red</strong><br>#e42e2e
          </div>
          <div style="background: #0072e5; color: white; padding: 16px; border-radius: 8px; text-align: center;">
            <strong>Info Blue</strong><br>#0072e5
          </div>
        </div>
        
        <h2>Text Colors</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; margin: 16px 0;">
          <div style="background: #000f30; color: white; padding: 16px; border-radius: 8px; text-align: center;">
            <strong>Text Dark</strong><br>#000f30
          </div>
          <div style="background: #476887; color: white; padding: 16px; border-radius: 8px; text-align: center;">
            <strong>Text Medium</strong><br>#476887
          </div>
        </div>
        
        <h2>Background Colors</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; margin: 16px 0;">
          <div style="background: #f6f9fb; color: #000f30; padding: 16px; border-radius: 8px; text-align: center; border: 1px solid #e5ecf3;">
            <strong>Background Light</strong><br>#f6f9fb
          </div>
          <div style="background: #e5ecf3; color: #000f30; padding: 16px; border-radius: 8px; text-align: center;">
            <strong>Border Light</strong><br>#e5ecf3
          </div>
        </div>
      </div>
    `
  })
};

export const Typography: Story = {
  render: () => ({
    template: `
      <div style="padding: 20px; max-width: 800px;">
        <h1>📝 Typography</h1>
        
        <h2>Font Family</h2>
        <p><strong>Inter</strong> - A modern, highly legible font designed for user interfaces.</p>
        
        <h2>Typography Scale</h2>
        <div style="margin: 16px 0;">
          <div style="font-size: 16px; font-weight: 600; margin-bottom: 8px; color: #000f30;">
            Semi Bold (600) - 16px - Titles
          </div>
          <div style="font-size: 14px; font-weight: 400; margin-bottom: 8px; color: #476887;">
            Regular (400) - 14px - Descriptions
          </div>
          <div style="font-size: 12px; font-weight: 600; margin-bottom: 8px; color: #000f30;">
            Semi Bold (600) - 12px - Button Text
          </div>
          <div style="font-size: 10px; font-weight: 500; margin-bottom: 8px; color: #476887;">
            Medium (500) - 10px - Labels
          </div>
        </div>
        
        <h2>Typography Scale Table</h2>
        <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
          <thead>
            <tr style="background: #f6f9fb;">
              <th style="padding: 12px; text-align: left; border: 1px solid #e5ecf3;">Element</th>
              <th style="padding: 12px; text-align: left; border: 1px solid #e5ecf3;">Font Size</th>
              <th style="padding: 12px; text-align: left; border: 1px solid #e5ecf3;">Font Weight</th>
              <th style="padding: 12px; text-align: left; border: 1px solid #e5ecf3;">Use Case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">Title</td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">16px</td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">600 (Semi Bold)</td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">Modal titles, section headers</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">Description</td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">14px</td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">400 (Regular)</td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">Modal descriptions, body text</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">Button Text</td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">12px</td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">600 (Semi Bold)</td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">Button labels, action text</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">Label</td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">10px</td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">500 (Medium)</td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">Form labels, small text</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  })
};

export const Spacing: Story = {
  render: () => ({
    template: `
      <div style="padding: 20px; max-width: 800px;">
        <h1>📏 Spacing</h1>
        
        <h2>Spacing Scale</h2>
        <div style="margin: 16px 0;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <div style="background: #338eea; width: 4px; height: 20px; margin-right: 12px;"></div>
            <span><strong>xs</strong> - 4px - Minimal spacing, tight layouts</span>
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <div style="background: #338eea; width: 8px; height: 20px; margin-right: 12px;"></div>
            <span><strong>sm</strong> - 8px - Component internal spacing</span>
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <div style="background: #338eea; width: 12px; height: 20px; margin-right: 12px;"></div>
            <span><strong>md</strong> - 12px - Footer padding, small gaps</span>
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <div style="background: #338eea; width: 16px; height: 20px; margin-right: 12px;"></div>
            <span><strong>lg</strong> - 16px - Content padding, standard gaps</span>
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <div style="background: #338eea; width: 20px; height: 20px; margin-right: 12px;"></div>
            <span><strong>xl</strong> - 20px - Header padding, large gaps</span>
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <div style="background: #338eea; width: 24px; height: 20px; margin-right: 12px;"></div>
            <span><strong>xxl</strong> - 24px - Footer gaps, major spacing</span>
          </div>
        </div>
        
        <h2>Border Radius</h2>
        <div style="display: flex; gap: 16px; margin: 16px 0;">
          <div style="background: #f6f9fb; border: 2px solid #e5ecf3; border-radius: 4px; padding: 16px; text-align: center;">
            <strong>Small</strong><br>4px
          </div>
          <div style="background: #f6f9fb; border: 2px solid #e5ecf3; border-radius: 6px; padding: 16px; text-align: center;">
            <strong>Medium</strong><br>6px
          </div>
          <div style="background: #f6f9fb; border: 2px solid #e5ecf3; border-radius: 10px; padding: 16px; text-align: center;">
            <strong>Large</strong><br>10px
          </div>
        </div>
      </div>
    `
  })
};

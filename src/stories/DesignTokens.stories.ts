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

Our design system uses a dual-value border radius system to support advanced corner smoothing (superellipse) on modern browsers while providing graceful fallbacks for others.

### Button Radius Tokens

| Size | Token Name | Ideal Radius (Corner Shape) | Fallback Radius |
| :--- | :--- | :--- | :--- |
| **24** | \`--radius-24\` | 14px | 8px |
| **32** | \`--radius-32\` | 18px | 10px |
| **36** | \`--radius-36\` | 22px | 12px |
| **40** | \`--radius-40\` | 26px | 14px |

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
  /* Size 24 */
  --radius-24-ideal: 14px;
  --radius-24-fallback: 8px;
  
  /* Size 32 */
  --radius-32-ideal: 18px;
  --radius-32-fallback: 10px;
  
  /* Size 36 */
  --radius-36-ideal: 22px;
  --radius-36-fallback: 12px;
  
  /* Size 40 */
  --radius-40-ideal: 26px;
  --radius-40-fallback: 14px;
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
      </div>
    `
  })
};

export const BorderRadius: Story = {
  render: () => ({
    template: `
      <div style="padding: 20px; max-width: 800px;">
        <h1>🔲 Border Radius</h1>
        
        <p style="margin-bottom: 24px; color: #666;">
          Visualizing the border radius system with both ideal (if supported) and fallback values.
        </p>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
          <thead>
            <tr style="background: #f6f9fb; text-align: left;">
              <th style="padding: 12px; border: 1px solid #e5ecf3;">Size</th>
              <th style="padding: 12px; border: 1px solid #e5ecf3;">Token</th>
              <th style="padding: 12px; border: 1px solid #e5ecf3;">Ideal (Corner Shape)</th>
              <th style="padding: 12px; border: 1px solid #e5ecf3;">Fallback</th>
              <th style="padding: 12px; border: 1px solid #e5ecf3;">Visual</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 12px; border: 1px solid #e5ecf3;"><strong>24</strong></td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;"><code>--radius-24</code></td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">14px</td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">8px</td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">
                <div style="width: 40px; height: 24px; background: #338eea; border-radius: var(--radius-24-fallback); @supports (corner-shape: superellipse(2)) { border-radius: var(--radius-24-ideal); corner-shape: superellipse(2); }"></div>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e5ecf3;"><strong>32</strong></td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;"><code>--radius-32</code></td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">18px</td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">10px</td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">
                <div style="width: 48px; height: 32px; background: #338eea; border-radius: var(--radius-32-fallback); @supports (corner-shape: superellipse(2)) { border-radius: var(--radius-32-ideal); corner-shape: superellipse(2); }"></div>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e5ecf3;"><strong>36</strong></td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;"><code>--radius-36</code></td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">22px</td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">12px</td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">
                <div style="width: 54px; height: 36px; background: #338eea; border-radius: var(--radius-36-fallback); @supports (corner-shape: superellipse(2)) { border-radius: var(--radius-36-ideal); corner-shape: superellipse(2); }"></div>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e5ecf3;"><strong>40</strong></td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;"><code>--radius-40</code></td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">26px</td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">14px</td>
              <td style="padding: 12px; border: 1px solid #e5ecf3;">
                <div style="width: 60px; height: 40px; background: #338eea; border-radius: var(--radius-40-fallback); @supports (corner-shape: superellipse(2)) { border-radius: var(--radius-40-ideal); corner-shape: superellipse(2); }"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  })
};

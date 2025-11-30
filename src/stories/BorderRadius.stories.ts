import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta = {
  title: 'Design System/Border Radius',
  parameters: {
    docs: {
      description: {
        component: `
# Border Radius System

Our design system uses a dual-value border radius system to support advanced corner smoothing (superellipse) on modern browsers while providing graceful fallbacks for others.

## Token System

We define both an **Ideal** value (used with \`corner-shape: superellipse\`) and a **Fallback** value (standard \`border-radius\`) for each component size.

### Button Radius Tokens

| Size | Token Name | Ideal Radius (Corner Shape) | Fallback Radius |
| :--- | :--- | :--- | :--- |
| **24** | \`--radius-24\` | 14px | 8px |
| **32** | \`--radius-32\` | 18px | 10px |
| **36** | \`--radius-36\` | 22px | 12px |
| **40** | \`--radius-40\` | 26px | 14px |
        `
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BorderRadiusTokens: Story = {
  render: () => ({
    template: `
      <div style="padding: 20px; max-width: 800px;">
        <h1>🔲 Border Radius Tokens</h1>
        
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


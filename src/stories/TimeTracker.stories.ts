import type { Meta, StoryObj } from '@storybook/vue3';
import TimeTracker from '../components/TimeTracker.vue';
import { onMounted } from 'vue';

const meta: Meta<typeof TimeTracker> = {
  title: 'Components/TimeTracker',
  component: TimeTracker,
  tags: ['autodocs'],
  argTypes: {
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 800,
      },
    },
    viewport: {
      defaultViewport: 'responsive',
    },
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { TimeTracker },
    setup() {
      onMounted(() => {
        try {
          // Hack to force Storybook Docs wrapper to 1200px
          if (window.parent && window.parent.document) {
            const styleId = 'force-docs-width';
            if (!window.parent.document.getElementById(styleId)) {
              const style = window.parent.document.createElement('style');
              style.id = styleId;
              style.innerHTML = `
                .sbdocs-wrapper {
                  max-width: none !important;
                  width: 1200px !important;
                  margin: 0 auto !important;
                }
                .sbdocs-content {
                  max-width: none !important;
                  width: 100% !important;
                }
              `;
              window.parent.document.head.appendChild(style);
            }
          }
        } catch (e) {
          console.warn('Could not inject styles into parent', e);
        }
      });
    },
    template: `
      <div style="display: flex; justify-content: center; align-items: center; background: #f6f9fb; width: 100%; height: 800px; overflow: hidden;">
        <div style="transform: scale(1.5); transform-origin: center;">
          <TimeTracker />
        </div>
      </div>
    `,
  }),
};

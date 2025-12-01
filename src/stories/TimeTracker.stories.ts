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
      <div style="width: 100%; height: 800px; background: #f6f9fb; position: relative; overflow: hidden;">
         <!-- TimeTracker injected here, free floating, initially centered -->
         <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 100;">
            <TimeTracker />
         </div>
         
         <!-- Helper text -->
         <div style="position: absolute; bottom: 24px; width: 100%; text-align: center; color: #64748b; font-family: sans-serif;">
           Drag the widget to the left or right edge to see the magnetic sticky effect
         </div>
      </div>
    `,
  }),
};

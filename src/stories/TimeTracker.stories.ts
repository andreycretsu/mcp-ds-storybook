import type { Meta, StoryObj } from '@storybook/vue3';
import TimeTracker from '../components/TimeTracker.vue';

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
    template: `
      <style>
        /* Force Storybook Docs wrapper to be full width */
        .sbdocs-wrapper, .sbdocs-content {
          max-width: none !important;
          width: 100% !important;
          padding: 0 !important;
          margin: 0 !important;
        }
        .sbdocs-preview {
          margin: 0 !important;
          border: none !important;
        }
      </style>
      <div style="display: flex; justify-content: center; align-items: center; background: #f6f9fb; width: 1600px; height: 800px; overflow: hidden;">
        <div style="transform: scale(1.5); transform-origin: center;">
          <TimeTracker />
        </div>
      </div>
    `,
  }),
};

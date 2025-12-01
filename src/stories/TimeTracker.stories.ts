import type { Meta, StoryObj } from '@storybook/vue3';
import TimeTracker from '../components/TimeTracker.vue';

const meta: Meta<typeof TimeTracker> = {
  title: 'Components/TimeTracker',
  component: TimeTracker,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
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
      <div style="width: 100vw; height: 100vh; background: #f0f2f5; padding: 60px; box-sizing: border-box; display: flex; align-items: center; justify-content: center;">
        <div style="width: 100%; height: 100%; background: rgba(255, 255, 255, 0.5); border: 2px dashed #e5e7eb; border-radius: 24px; position: relative; display: flex; align-items: center; justify-content: center;">
          <TimeTracker />
        </div>
      </div>
    `,
  }),
};

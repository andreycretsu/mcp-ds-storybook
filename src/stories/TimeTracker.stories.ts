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
      <div style="display: flex; justify-content: center; align-items: center; background: #f6f9fb; width: 100%; height: 600px;">
        <div style="transform: scale(1.5); transform-origin: center;">
          <TimeTracker />
        </div>
      </div>
    `,
  }),
};

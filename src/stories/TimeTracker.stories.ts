import type { Meta, StoryObj } from '@storybook/vue3';
import TimeTracker from '../components/TimeTracker.vue';

const meta: Meta<typeof TimeTracker> = {
  title: 'Components/TimeTracker',
  component: TimeTracker,
  tags: ['autodocs'],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { TimeTracker },
    template: `
      <div style="padding: 20px; display: flex; justify-content: center; background: #f6f9fb; min-height: 200px; align-items: center;">
        <TimeTracker />
      </div>
    `,
  }),
};


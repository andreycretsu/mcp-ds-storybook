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
  },
  argTypes: {
    projectName: { control: 'text' },
    projectEmoji: { control: 'text' },
    initialWorkTime: { control: 'number' },
    initialBreakTime: { control: 'number' },
    initialStatus: { 
      control: 'radio', 
      options: ['work', 'break'] 
    },
    snapThreshold: { control: 'number' },
    // Events
    onStop: { action: 'stop' },
    onStart: { action: 'start' },
    'onStatus-change': { action: 'status-change' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    projectName: 'Customer Success Strategy',
    projectEmoji: '📑',
    initialWorkTime: 0,
    initialBreakTime: 0,
    initialStatus: 'work',
    snapThreshold: 50,
  },
  render: (args) => ({
    components: { TimeTracker },
    setup() {
      return { args };
    },
    template: `
      <div style="width: 100vw; height: 100vh; background: #f0f2f5; padding: 60px; box-sizing: border-box; display: flex; align-items: center; justify-content: center;">
        <div style="width: 100%; height: 100%; background: rgba(255, 255, 255, 0.5); border: 2px dashed #e5e7eb; border-radius: 24px; position: relative; display: flex; align-items: center; justify-content: center;">
          <TimeTracker v-bind="args" />
        </div>
      </div>
    `,
  }),
};

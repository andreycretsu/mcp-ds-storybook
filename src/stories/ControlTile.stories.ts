import type { Meta, StoryObj } from '@storybook/vue3';
import ControlTile from '../components/ControlTile.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/ControlTile',
  component: ControlTile,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['S', 'M', 'L'],
      description: 'Size of the control tile'
    },
    type: {
      control: 'select',
      options: ['Fixed', 'Hug'],
      description: 'Width type of the control tile'
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the control tile is disabled'
    },
    active: {
      control: 'boolean',
      description: 'Whether the control tile is in active state'
    },
    label: {
      control: 'text',
      description: 'Main text of the control tile'
    },
    description: {
      control: 'text',
      description: 'Description text below the label'
    },
    showControl: {
      control: 'boolean',
      description: 'Whether to show the control element'
    },
    controlIcon: {
      control: 'text',
      description: 'Icon to show in the control element'
    },
    showIcon: {
      control: 'boolean',
      description: 'Whether to show the small icon next to the label'
    },
    icon: {
      control: 'text',
      description: 'Icon to show next to the label'
    }
  }
} satisfies Meta<typeof ControlTile>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

// Large Fixed Control Tile
export const LargeFixed: Story = {
  args: {
    size: 'L',
    type: 'Fixed',
    label: 'Control Tile',
    description: 'Description text',
    disabled: false,
    active: false,
    showControl: true,
    controlIcon: '🟢',
    showIcon: true,
    icon: '🔷'
  }
};

// Large Fixed Disabled
export const LargeFixedDisabled: Story = {
  args: {
    ...LargeFixed.args,
    disabled: true
  }
};

// Large Fixed Active
export const LargeFixedActive: Story = {
  args: {
    ...LargeFixed.args,
    active: true
  }
};

// Large Hug Control Tile
export const LargeHug: Story = {
  args: {
    ...LargeFixed.args,
    type: 'Hug'
  }
};

// Medium Fixed Control Tile
export const MediumFixed: Story = {
  args: {
    ...LargeFixed.args,
    size: 'M'
  }
};

// Medium Hug Control Tile
export const MediumHug: Story = {
  args: {
    ...MediumFixed.args,
    type: 'Hug'
  }
};

// Small Fixed Control Tile
export const SmallFixed: Story = {
  args: {
    ...LargeFixed.args,
    size: 'S'
  }
};

// Small Hug Control Tile
export const SmallHug: Story = {
  args: {
    ...SmallFixed.args,
    type: 'Hug'
  }
};

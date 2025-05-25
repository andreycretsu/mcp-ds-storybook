import type { Meta, StoryObj, StoryFn } from '@storybook/vue3';
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
      options: ['L', 'M'],
      description: 'Size variant from MCP server'
    },
    type: {
      control: 'select',
      options: ['Fixed', 'Hug'],
      description: 'Type variant from MCP server'
    },
    controlType: {
      control: 'select',
      options: ['checkbox', 'toggle', 'radio'],
      description: 'Type of control',
      defaultValue: 'checkbox'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable state from MCP server',
      defaultValue: false
    },
    info: {
      control: 'boolean',
      description: 'Show info icon',
      defaultValue: false
    },
    icon: {
      control: 'text',
      description: 'FontAwesome icon name'
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

// Visual selector for story logic only
const visualOptions = ['empty', 'control', 'icon'];

const Template: StoryFn<typeof ControlTile> = (args, { globals, parameters }) => {
  // Use a local variable for visual mode (simulate a toolbar or control)
  const visual = parameters.visual || 'empty';
  let control = false;
  let icon = '';
  if (visual === 'control') control = true;
  if (visual === 'icon') icon = args.icon || 'star';
  return {
    components: { ControlTile },
    setup() {
      return { args: { ...args, control, icon } };
    },
    template: `<ControlTile v-bind="args" />`,
  };
};

// Size variants from MCP
export const Large: Story = {
  render: Template,
  parameters: { visual: 'empty' },
  args: {
    label: 'Large Tile',
    description: 'Description text',
    size: 'L',
    type: 'Fixed',
    controlType: 'checkbox',
    info: false,
    disabled: false,
    icon: ''
  }
}

export const Medium: Story = {
  args: {
    label: 'Medium Tile',
    description: 'Description text',
    size: 'M',
    type: 'Fixed',
    controlType: 'checkbox',
    icon: '',
    info: false,
    disabled: false
  }
}

// Type variants from MCP
export const Fixed: Story = {
  args: {
    label: 'Fixed Width',
    description: 'Description text',
    size: 'M',
    type: 'Fixed',
    controlType: 'checkbox',
    icon: '',
    info: false,
    disabled: false
  }
}

export const Hug: Story = {
  args: {
    label: 'Hug Content',
    description: 'Description text',
    size: 'M',
    type: 'Hug',
    controlType: 'checkbox',
    icon: '',
    info: false,
    disabled: false
  }
}

// State variants from MCP
export const Default: Story = {
  args: {
    label: 'Default State',
    description: 'Description text',
    size: 'M',
    type: 'Fixed',
    controlType: 'checkbox',
    icon: '',
    info: false,
    disabled: false
  }
}

export const Hover: Story = {
  args: {
    label: 'Hover State',
    description: 'Description text',
    size: 'M',
    type: 'Fixed',
    controlType: 'checkbox',
    icon: '',
    info: false,
    disabled: false
  },
  parameters: {
    pseudo: { hover: true }
  }
}

export const Disabled: Story = {
  args: {
    label: 'Disabled State',
    description: 'Description text',
    size: 'M',
    type: 'Fixed',
    controlType: 'checkbox',
    icon: '',
    info: false,
    disabled: true
  }
}

// Icon examples
export const WithIcon: Story = {
  render: Template,
  parameters: { visual: 'icon' },
  args: {
    label: 'With Icon',
    description: 'Description text',
    size: 'M',
    type: 'Fixed',
    controlType: 'checkbox',
    info: false,
    disabled: false,
    icon: 'star'
  }
}

export const WithControl: Story = {
  render: Template,
  parameters: { visual: 'control' },
  args: {
    label: 'With Control',
    description: 'Description text',
    size: 'M',
    type: 'Fixed',
    controlType: 'checkbox',
    info: false,
    disabled: false,
    icon: ''
  }
}

export const WithInfoIcon: Story = {
  render: Template,
  parameters: { visual: 'empty' },
  args: {
    label: 'With Info Icon',
    description: 'Description text',
    size: 'M',
    type: 'Fixed',
    controlType: 'checkbox',
    info: true,
    disabled: false,
    icon: ''
  }
}

// Complex example
export const Complex: Story = {
  render: Template,
  parameters: { visual: 'icon' },
  args: {
    label: 'Complex Example',
    description: 'With icon, info icon, and active state',
    size: 'L',
    type: 'Fixed',
    controlType: 'checkbox',
    info: true,
    disabled: false,
    icon: 'star'
  }
}

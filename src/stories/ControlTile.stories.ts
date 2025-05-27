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
    leftSlot: {
      control: 'select',
      options: ['none', 'icon', 'control'],
      description: 'What to show in the left slot',
      defaultValue: 'none',
    },
    icon: {
      control: 'text',
      description: 'FontAwesome icon name',
      if: { arg: 'leftSlot', eq: 'icon' }
    },
    controlType: {
      control: 'select',
      options: ['checkbox', 'toggle', 'radio'],
      description: 'Type of control',
      if: { arg: 'leftSlot', eq: 'control' },
      defaultValue: 'checkbox',
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
    label: { control: 'text', description: 'Tile label' },
    description: { control: 'text', description: 'Tile description' },
  }
} satisfies Meta<typeof ControlTile>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

// Size variants from MCP
export const Large: Story = {
  args: {
    label: 'Large Tile',
    description: 'Description text',
    size: 'L',
    type: 'Fixed',
    leftSlot: 'none',
    info: false,
    disabled: false,
    icon: '',
    controlType: 'checkbox',
  }
}

export const Medium: Story = {
  args: {
    label: 'Medium Tile',
    description: 'Description text',
    size: 'M',
    type: 'Fixed',
    leftSlot: 'none',
    info: false,
    disabled: false,
    icon: '',
    controlType: 'checkbox',
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
  args: {
    label: 'With Icon',
    description: 'Description text',
    size: 'M',
    type: 'Fixed',
    leftSlot: 'icon',
    icon: 'star',
    info: false,
    disabled: false,
    controlType: 'checkbox',
  }
}

export const WithControl: Story = {
  args: {
    label: 'With Control',
    description: 'Description text',
    size: 'M',
    type: 'Fixed',
    leftSlot: 'control',
    controlType: 'checkbox',
    info: false,
    disabled: false,
    icon: '',
  }
}

export const WithInfoIcon: Story = {
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

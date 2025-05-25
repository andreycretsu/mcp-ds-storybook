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
      options: ['L', 'M'],
      description: 'Size variant from MCP server'
    },
    type: {
      control: 'select',
      options: ['Fixed', 'Hug'],
      description: 'Type variant from MCP server'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable state from MCP server',
      defaultValue: false
    },
    control: {
      control: 'boolean',
      description: 'Show control visual instead of icon',
      defaultValue: false
    },
    info: {
      control: 'boolean',
      description: 'Show info icon'
    },
    icon: {
      control: 'text',
      description: 'FontAwesome icon name'
    },
    iconColor: {
      control: 'color',
      description: 'Icon color'
    },
    iconSpin: {
      control: 'boolean',
      description: 'Spin animation',
      defaultValue: false
    },
    iconPulse: {
      control: 'boolean',
      description: 'Pulse animation',
      defaultValue: false
    },
    iconFixedWidth: {
      control: 'boolean',
      description: 'Fixed width icon',
      defaultValue: false
    },
    infoIconColor: {
      control: 'color',
      description: 'Info icon color'
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

// Size variants from MCP
export const Large: Story = {
  args: {
    label: 'Large Tile',
    description: 'Description text',
    size: 'L',
    type: 'Fixed',
    control: false,
    info: false,
    iconSpin: false,
    iconPulse: false,
    iconFixedWidth: false,
    disabled: false
  }
}

export const Medium: Story = {
  args: {
    label: 'Medium Tile',
    description: 'Description text',
    size: 'M',
    type: 'Fixed',
    control: false,
    info: false,
    iconSpin: false,
    iconPulse: false,
    iconFixedWidth: false,
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
    control: false,
    info: false,
    iconSpin: false,
    iconPulse: false,
    iconFixedWidth: false,
    disabled: false
  }
}

export const Hug: Story = {
  args: {
    label: 'Hug Content',
    description: 'Description text',
    size: 'M',
    type: 'Hug',
    control: false,
    info: false,
    iconSpin: false,
    iconPulse: false,
    iconFixedWidth: false,
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
    control: false,
    info: false,
    iconSpin: false,
    iconPulse: false,
    iconFixedWidth: false,
    disabled: false
  }
}

export const Hover: Story = {
  args: {
    label: 'Hover State',
    description: 'Description text',
    size: 'M',
    type: 'Fixed',
    control: false,
    info: false,
    iconSpin: false,
    iconPulse: false,
    iconFixedWidth: false,
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
    control: false,
    info: false,
    iconSpin: false,
    iconPulse: false,
    iconFixedWidth: false,
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
    control: false,
    info: false,
    iconSpin: false,
    iconPulse: false,
    iconFixedWidth: false,
    disabled: false,
    icon: 'fa-solid fa-star',
    iconColor: '#2563EB'
  }
}

export const WithControl: Story = {
  args: {
    label: 'With Control',
    description: 'Description text',
    size: 'M',
    type: 'Fixed',
    control: true,
    info: false,
    iconSpin: false,
    iconPulse: false,
    iconFixedWidth: false,
    disabled: false
  }
}

export const WithInfoIcon: Story = {
  args: {
    label: 'With Info Icon',
    description: 'Description text',
    size: 'M',
    type: 'Fixed',
    control: false,
    iconSpin: false,
    iconPulse: false,
    iconFixedWidth: false,
    disabled: false,
    info: true,
    infoIconColor: '#6B7280'
  }
}

// Complex example
export const Complex: Story = {
  args: {
    label: 'Complex Example',
    description: 'With icon, info icon, and active state',
    size: 'L',
    type: 'Fixed',
    control: false,
    iconSpin: false,
    iconPulse: false,
    iconFixedWidth: false,
    disabled: false,
    icon: 'fa-solid fa-star',
    iconColor: '#2563EB',
    info: true,
    infoIconColor: '#6B7280'
  }
}

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
      description: 'Disable state from MCP server'
    },
    active: {
      control: 'boolean',
      description: 'Active=yes/no from MCP server'
    },
    control: {
      control: 'boolean',
      description: 'Show control visual instead of icon'
    },
    showInfoIcon: {
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
      description: 'Spin animation'
    },
    iconPulse: {
      control: 'boolean',
      description: 'Pulse animation'
    },
    iconFixedWidth: {
      control: 'boolean',
      description: 'Fixed width icon'
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
    type: 'Fixed'
  }
}

export const Medium: Story = {
  args: {
    label: 'Medium Tile',
    description: 'Description text',
    size: 'M',
    type: 'Fixed'
  }
}

// Type variants from MCP
export const Fixed: Story = {
  args: {
    label: 'Fixed Width',
    description: 'Description text',
    size: 'M',
    type: 'Fixed'
  }
}

export const Hug: Story = {
  args: {
    label: 'Hug Content',
    description: 'Description text',
    size: 'M',
    type: 'Hug'
  }
}

// State variants from MCP
export const Default: Story = {
  args: {
    label: 'Default State',
    description: 'Description text',
    size: 'M',
    type: 'Fixed'
  }
}

export const Hover: Story = {
  args: {
    label: 'Hover State',
    description: 'Description text',
    size: 'M',
    type: 'Fixed'
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
    disabled: true
  }
}

// Active variants from MCP
export const Active: Story = {
  args: {
    label: 'Active=yes',
    description: 'Description text',
    size: 'M',
    type: 'Fixed',
    active: true
  }
}

export const Inactive: Story = {
  args: {
    label: 'Active=no',
    description: 'Description text',
    size: 'M',
    type: 'Fixed',
    active: false
  }
}

// Icon examples
export const WithIcon: Story = {
  args: {
    label: 'With Icon',
    description: 'Description text',
    size: 'M',
    type: 'Fixed',
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
    control: true
  }
}

export const WithInfoIcon: Story = {
  args: {
    label: 'With Info Icon',
    description: 'Description text',
    size: 'M',
    type: 'Fixed',
    showInfoIcon: true,
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
    icon: 'fa-solid fa-star',
    iconColor: '#2563EB',
    showInfoIcon: true,
    infoIconColor: '#6B7280',
    active: true
  }
}

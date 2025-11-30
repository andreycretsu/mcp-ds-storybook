import type { Meta, StoryObj } from '@storybook/vue3'
import Badge from '../components/Badge.vue'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile badge component with multiple size, emphasis, and color variants. Supports icons, avatars, and status indicators.'
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Badge text content'
    },
    size: {
      control: 'select',
      options: ['S', 'M', 'L'],
      description: 'Size variant'
    },
    emphasis: {
      control: 'select',
      options: ['Low', 'High'],
      description: 'Emphasis level'
    },
    color: {
      control: 'select',
      options: ['Green', 'Blue', 'Yellow', 'Red', 'Cyan', 'Violet', 'Rose', 'White', 'Grey'],
      description: 'Color variant'
    },
    showIcon: {
      control: 'boolean',
      description: 'Show icon instead of avatar'
    },
    icon: {
      control: 'text',
      description: 'FontAwesome icon name'
    },
    showAvatar: {
      control: 'boolean',
      description: 'Show avatar instead of icon'
    },
    avatarInitials: {
      control: 'text',
      description: 'Avatar initials (1-2 characters)'
    },
    unassigned: {
      control: 'boolean',
      description: 'Show unassigned state (ghost icon)'
    },
    showAvatarBadge: {
      control: 'boolean',
      description: 'Show avatar badge indicator'
    },
    showStatus: {
      control: 'boolean',
      description: 'Show status indicator'
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

// Default Badge
export const Default: Story = {
  args: {
    label: 'Badge',
    size: 'M',
    emphasis: 'Low',
    color: 'Green'
  }
}

// With Icon
export const WithIcon: Story = {
  args: {
    label: 'Badge',
    size: 'M',
    emphasis: 'Low',
    color: 'Blue',
    showIcon: true,
    icon: 'circle-small'
  }
}

// With Avatar
export const WithAvatar: Story = {
  args: {
    label: 'Badge',
    size: 'M',
    emphasis: 'Low',
    color: 'Green',
    showAvatar: true,
    avatarInitials: 'A'
  }
}

// With Avatar - Unassigned
export const WithAvatarUnassigned: Story = {
  args: {
    label: 'Badge',
    size: 'M',
    emphasis: 'Low',
    color: 'Grey',
    showAvatar: true,
    unassigned: true
  }
}

// With Avatar and Indicators
export const WithAvatarAndIndicators: Story = {
  args: {
    label: 'Badge',
    size: 'L',
    emphasis: 'Low',
    color: 'Green',
    showAvatar: true,
    avatarInitials: 'A',
    showAvatarBadge: true,
    showStatus: true
  }
}

// High Emphasis
export const HighEmphasis: Story = {
  args: {
    label: 'Badge',
    size: 'M',
    emphasis: 'High',
    color: 'Blue'
  }
}

// Size Variants
export const SizeVariants: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: flex; align-items: center; gap: 16px;">
        <Badge label="Small" size="S" color="Green" />
        <Badge label="Medium" size="M" color="Blue" />
        <Badge label="Large" size="L" color="Red" />
      </div>
    `
  })
}

// Color Variants - Low Emphasis
export const ColorVariantsLow: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 8px; max-width: 600px;">
        <Badge label="Green" color="Green" emphasis="Low" />
        <Badge label="Blue" color="Blue" emphasis="Low" />
        <Badge label="Yellow" color="Yellow" emphasis="Low" />
        <Badge label="Red" color="Red" emphasis="Low" />
        <Badge label="Cyan" color="Cyan" emphasis="Low" />
        <Badge label="Violet" color="Violet" emphasis="Low" />
        <Badge label="Rose" color="Rose" emphasis="Low" />
        <Badge label="White" color="White" emphasis="Low" />
        <Badge label="Grey" color="Grey" emphasis="Low" />
      </div>
    `
  })
}

// Color Variants - High Emphasis
export const ColorVariantsHigh: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 8px; max-width: 600px;">
        <Badge label="Green" color="Green" emphasis="High" />
        <Badge label="Blue" color="Blue" emphasis="High" />
        <Badge label="Yellow" color="Yellow" emphasis="High" />
        <Badge label="Red" color="Red" emphasis="High" />
        <Badge label="Cyan" color="Cyan" emphasis="High" />
        <Badge label="Violet" color="Violet" emphasis="High" />
        <Badge label="Rose" color="Rose" emphasis="High" />
        <Badge label="Grey" color="Grey" emphasis="High" />
      </div>
    `
  })
}

// Complete Matrix - Low Emphasis
export const CompleteMatrixLow: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; max-width: 1200px;">
        <!-- Size L -->
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Large (24px)</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 4px;">
            <Badge label="Green" size="L" color="Green" emphasis="Low" />
            <Badge label="Blue" size="L" color="Blue" emphasis="Low" />
            <Badge label="Yellow" size="L" color="Yellow" emphasis="Low" />
            <Badge label="Red" size="L" color="Red" emphasis="Low" />
            <Badge label="Cyan" size="L" color="Cyan" emphasis="Low" />
            <Badge label="Violet" size="L" color="Violet" emphasis="Low" />
            <Badge label="Rose" size="L" color="Rose" emphasis="Low" />
            <Badge label="White" size="L" color="White" emphasis="Low" />
            <Badge label="Grey" size="L" color="Grey" emphasis="Low" />
          </div>
        </div>
        
        <!-- Size M -->
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Medium (20px)</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 4px;">
            <Badge label="Green" size="M" color="Green" emphasis="Low" />
            <Badge label="Blue" size="M" color="Blue" emphasis="Low" />
            <Badge label="Yellow" size="M" color="Yellow" emphasis="Low" />
            <Badge label="Red" size="M" color="Red" emphasis="Low" />
            <Badge label="Cyan" size="M" color="Cyan" emphasis="Low" />
            <Badge label="Violet" size="M" color="Violet" emphasis="Low" />
            <Badge label="Rose" size="M" color="Rose" emphasis="Low" />
            <Badge label="White" size="M" color="White" emphasis="Low" />
            <Badge label="Grey" size="M" color="Grey" emphasis="Low" />
          </div>
        </div>
        
        <!-- Size S -->
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Small (16px)</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 4px;">
            <Badge label="Green" size="S" color="Green" emphasis="Low" />
            <Badge label="Blue" size="S" color="Blue" emphasis="Low" />
            <Badge label="Yellow" size="S" color="Yellow" emphasis="Low" />
            <Badge label="Red" size="S" color="Red" emphasis="Low" />
            <Badge label="Cyan" size="S" color="Cyan" emphasis="Low" />
            <Badge label="Violet" size="S" color="Violet" emphasis="Low" />
            <Badge label="Rose" size="S" color="Rose" emphasis="Low" />
            <Badge label="White" size="S" color="White" emphasis="Low" />
            <Badge label="Grey" size="S" color="Grey" emphasis="Low" />
          </div>
        </div>
      </div>
    `
  })
}

// Complete Matrix - High Emphasis
export const CompleteMatrixHigh: Story = {
  render: () => ({
    components: { Badge },
    template: `
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; max-width: 1200px;">
        <!-- Size L -->
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Large (24px)</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 4px;">
            <Badge label="Green" size="L" color="Green" emphasis="High" />
            <Badge label="Blue" size="L" color="Blue" emphasis="High" />
            <Badge label="Yellow" size="L" color="Yellow" emphasis="High" />
            <Badge label="Red" size="L" color="Red" emphasis="High" />
            <Badge label="Cyan" size="L" color="Cyan" emphasis="High" />
            <Badge label="Violet" size="L" color="Violet" emphasis="High" />
            <Badge label="Rose" size="L" color="Rose" emphasis="High" />
            <Badge label="Grey" size="L" color="Grey" emphasis="High" />
          </div>
        </div>
        
        <!-- Size M -->
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Medium (20px)</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 4px;">
            <Badge label="Green" size="M" color="Green" emphasis="High" />
            <Badge label="Blue" size="M" color="Blue" emphasis="High" />
            <Badge label="Yellow" size="M" color="Yellow" emphasis="High" />
            <Badge label="Red" size="M" color="Red" emphasis="High" />
            <Badge label="Cyan" size="M" color="Cyan" emphasis="High" />
            <Badge label="Violet" size="M" color="Violet" emphasis="High" />
            <Badge label="Rose" size="M" color="Rose" emphasis="High" />
            <Badge label="Grey" size="M" color="Grey" emphasis="High" />
          </div>
        </div>
        
        <!-- Size S -->
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 14px; color: #666;">Small (16px)</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 4px;">
            <Badge label="Green" size="S" color="Green" emphasis="High" />
            <Badge label="Blue" size="S" color="Blue" emphasis="High" />
            <Badge label="Yellow" size="S" color="Yellow" emphasis="High" />
            <Badge label="Red" size="S" color="Red" emphasis="High" />
            <Badge label="Cyan" size="S" color="Cyan" emphasis="High" />
            <Badge label="Violet" size="S" color="Violet" emphasis="High" />
            <Badge label="Rose" size="S" color="Rose" emphasis="High" />
            <Badge label="Grey" size="S" color="Grey" emphasis="High" />
          </div>
        </div>
      </div>
    `
  })
}

// Interactive Demo
export const InteractiveDemo: Story = {
  args: {
    label: 'Badge',
    size: 'M',
    emphasis: 'Low',
    color: 'Green',
    showIcon: false,
    icon: 'circle-small',
    showAvatar: false,
    avatarInitials: 'A',
    unassigned: false,
    showAvatarBadge: false,
    showStatus: false
  }
} 
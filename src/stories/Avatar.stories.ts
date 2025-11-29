import type { Meta, StoryObj } from '@storybook/vue3'
import Avatar from '../components/Avatar.vue'

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible avatar component with multiple sizes, initials, unassigned state, and optional indicators. Supports all sizes from 12px to 152px with exact Figma specifications.'
      }
    }
  },
  argTypes: {
    initials: {
      control: 'text',
      description: 'Avatar initials (1-2 characters)'
    },
    size: {
      control: 'select',
      options: [12, 16, 20, 24, 32, 36, 40, 48, 64, 72, 152],
      description: 'Size in pixels'
    },
    whiteBorder: {
      control: 'boolean',
      description: 'Show white border around avatar'
    },
    unassigned: {
      control: 'boolean',
      description: 'Show unassigned state (ghost icon)'
    },
    showBadge: {
      control: 'boolean',
      description: 'Show badge indicator'
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

// Default Avatar
export const Default: Story = {
  args: {
    initials: 'A',
    size: 24,
    whiteBorder: false,
    unassigned: false,
    showBadge: false,
    showStatus: false
  }
}

// All Sizes
export const AllSizes: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="12" />
          <span style="font-size: 10px; color: #666;">12px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="16" />
          <span style="font-size: 10px; color: #666;">16px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="20" />
          <span style="font-size: 10px; color: #666;">20px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="24" />
          <span style="font-size: 10px; color: #666;">24px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="32" />
          <span style="font-size: 10px; color: #666;">32px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="36" />
          <span style="font-size: 10px; color: #666;">36px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="40" />
          <span style="font-size: 10px; color: #666;">40px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="48" />
          <span style="font-size: 10px; color: #666;">48px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="64" />
          <span style="font-size: 10px; color: #666;">64px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="72" />
          <span style="font-size: 10px; color: #666;">72px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="152" />
          <span style="font-size: 10px; color: #666;">152px</span>
        </div>
      </div>
    `
  })
}

// Badge Sizes (for Badge component usage)
export const BadgeSizes: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div style="display: flex; align-items: center; gap: 16px;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="12" />
          <span style="font-size: 10px; color: #666;">Badge S</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="12" />
          <span style="font-size: 10px; color: #666;">Badge M</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar initials="A" :size="16" />
          <span style="font-size: 10px; color: #666;">Badge L</span>
        </div>
      </div>
    `
  })
}

// Unassigned States
export const UnassignedStates: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div style="display: flex; align-items: center; gap: 16px;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar :size="12" :unassigned="true" />
          <span style="font-size: 10px; color: #666;">12px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar :size="16" :unassigned="true" />
          <span style="font-size: 10px; color: #666;">16px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar :size="24" :unassigned="true" />
          <span style="font-size: 10px; color: #666;">24px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar :size="32" :unassigned="true" />
          <span style="font-size: 10px; color: #666;">32px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
          <Avatar :size="48" :unassigned="true" />
          <span style="font-size: 10px; color: #666;">48px</span>
        </div>
      </div>
    `
  })
}

// With Indicators
export const WithIndicators: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div style="display: flex; align-items: center; gap: 24px;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <Avatar initials="A" :size="24" :showBadge="true" />
          <span style="font-size: 10px; color: #666;">Badge</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <Avatar initials="A" :size="24" :showStatus="true" />
          <span style="font-size: 10px; color: #666;">Status</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <Avatar initials="A" :size="24" :showBadge="true" :showStatus="true" />
          <span style="font-size: 10px; color: #666;">Both</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <Avatar initials="A" :size="48" :showBadge="true" :showStatus="true" />
          <span style="font-size: 10px; color: #666;">Large</span>
        </div>
      </div>
    `
  })
}

// White Border Variants
export const WithWhiteBorder: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div style="display: flex; align-items: center; gap: 16px; background: #333; padding: 20px; border-radius: 8px;">
        <Avatar initials="A" :size="24" :whiteBorder="true" />
        <Avatar initials="AB" :size="32" :whiteBorder="true" />
        <Avatar initials="JD" :size="40" :whiteBorder="true" :showBadge="true" />
        <Avatar :size="32" :whiteBorder="true" :unassigned="true" />
        <Avatar initials="MK" :size="48" :whiteBorder="true" :showBadge="true" :showStatus="true" />
      </div>
    `
  }),
  parameters: {
    backgrounds: { default: 'dark' }
  }
}

// Different Initials
export const DifferentInitials: Story = {
  render: () => ({
    components: { Avatar },
    template: `
      <div style="display: flex; align-items: center; gap: 16px;">
        <Avatar initials="A" :size="32" />
        <Avatar initials="AB" :size="32" />
        <Avatar initials="JD" :size="32" />
        <Avatar initials="MK" :size="32" />
        <Avatar initials="XY" :size="32" />
      </div>
    `
  })
}

// Interactive Demo
export const InteractiveDemo: Story = {
  args: {
    initials: 'A',
    size: 32,
    whiteBorder: false,
    unassigned: false,
    showBadge: false,
    showStatus: false
  }
} 
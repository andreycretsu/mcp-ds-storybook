import type { Meta, StoryObj } from '@storybook/vue3'
import Spinner from '../components/Spinner.vue'

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl', 12, 24, 48],
      description: 'Size of the spinner (preset or custom number/string)'
    },
    color: {
      control: 'color',
      description: 'Color of the spinner'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  },
  args: {
    size: 'md',
    color: 'currentColor'
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'md'
  }
}

export const Sizes: Story = {
  render: () => ({
    components: { Spinner },
    template: `
      <div style="display: flex; align-items: center; gap: 16px;">
        <div style="text-align: center;">
          <Spinner size="sm" />
          <p style="font-size: 12px; color: #666;">sm (12px)</p>
        </div>
        <div style="text-align: center;">
          <Spinner size="md" />
          <p style="font-size: 12px; color: #666;">md (16px)</p>
        </div>
        <div style="text-align: center;">
          <Spinner size="lg" />
          <p style="font-size: 12px; color: #666;">lg (24px)</p>
        </div>
        <div style="text-align: center;">
          <Spinner size="xl" />
          <p style="font-size: 12px; color: #666;">xl (32px)</p>
        </div>
      </div>
    `
  })
}

export const CustomSize: Story = {
  args: {
    size: 48
  }
}

export const Colors: Story = {
  render: () => ({
    components: { Spinner },
    template: `
      <div style="display: flex; align-items: center; gap: 16px;">
        <Spinner size="lg" color="#3b82f6" />
        <Spinner size="lg" color="#ef4444" />
        <Spinner size="lg" color="#10b981" />
        <Spinner size="lg" color="#f59e0b" />
      </div>
    `
  })
}

export const WithContainer: Story = {
  argTypes: {
    containerRadius: {
      control: { type: 'range', min: 0, max: 32, step: 1 },
      description: 'Border radius of the container (px)',
      table: { category: 'Container' }
    },
    containerColor: {
      control: 'color',
      description: 'Background color of the container',
      table: { category: 'Container' }
    }
  },
  args: {
    containerRadius: 12,
    containerColor: '#e5e7eb' // Gray-200-ish
  },
  render: (args) => ({
    components: { Spinner },
    setup() { return { args } },
    template: `
      <div style="display: flex; align-items: center; gap: 16px; padding: 20px;">
        <!-- SM Container -->
        <div :style="{
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          width: '32px', 
          height: '32px', 
          background: args.containerColor, 
          borderRadius: args.containerRadius + 'px', 
          cornerShape: 'superellipse(var(--superK))'
        }">
          <Spinner size="sm" />
        </div>

        <!-- MD Container -->
        <div :style="{
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          width: '40px', 
          height: '40px', 
          background: args.containerColor, 
          borderRadius: args.containerRadius + 'px', 
          cornerShape: 'superellipse(var(--superK))'
        }">
          <Spinner size="md" />
        </div>

        <!-- LG Container -->
        <div :style="{
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          width: '56px', 
          height: '56px', 
          background: args.containerColor, 
          borderRadius: args.containerRadius + 'px', 
          cornerShape: 'superellipse(var(--superK))'
        }">
          <Spinner size="lg" />
        </div>
        
        <!-- XL Container -->
        <div :style="{
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          width: '72px', 
          height: '72px', 
          background: args.containerColor, 
          borderRadius: args.containerRadius + 'px', 
          cornerShape: 'superellipse(var(--superK))'
        }">
          <Spinner size="xl" />
        </div>
      </div>
    `
  })
}


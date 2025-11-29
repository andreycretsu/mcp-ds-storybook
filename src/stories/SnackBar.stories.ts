import type { Meta, StoryObj } from '@storybook/vue3'
import SnackBar from '../components/SnackBar.vue'

const meta: Meta<typeof SnackBar> = {
  title: 'Components/SnackBar',
  component: SnackBar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A notification/toast component with multiple variants, optional icons, and customizable actions. Matches Figma design exactly.'
      }
    }
  },
  argTypes: {
    message: {
      control: 'text',
      description: 'Notification message text'
    },
    variant: {
      control: 'select',
      options: ['neutral', 'success', 'attention', 'critical', 'information', 'loader'],
      description: 'Visual variant with different icon colors'
    },
    showIcon: {
      control: 'boolean',
      description: 'Show variant-specific icon'
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show close button'
    },
    actions: {
      control: 'object',
      description: 'Array of action buttons'
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

// Default SnackBar
export const Default: Story = {
  args: {
    message: 'Are you sure you want to delete this? This action cannot be undone.',
    variant: 'neutral',
    showIcon: false,
    showCloseButton: true,
    actions: []
  }
}

// With Icon
export const WithIcon: Story = {
  args: {
    message: 'Are you sure you want to delete this? This action cannot be undone.',
    variant: 'neutral',
    showIcon: true,
    showCloseButton: true,
    actions: []
  }
}

// Success Variant
export const Success: Story = {
  args: {
    message: 'File successfully uploaded and processed.',
    variant: 'success',
    showIcon: true,
    showCloseButton: true,
    actions: []
  }
}

// Attention Variant
export const Attention: Story = {
  args: {
    message: 'Please review your changes before continuing.',
    variant: 'attention',
    showIcon: true,
    showCloseButton: true,
    actions: []
  }
}

// Critical Variant
export const Critical: Story = {
  args: {
    message: 'Unable to save changes. Please try again.',
    variant: 'critical',
    showIcon: true,
    showCloseButton: true,
    actions: []
  }
}

// Information Variant
export const Information: Story = {
  args: {
    message: 'New features are now available in your dashboard.',
    variant: 'information',
    showIcon: true,
    showCloseButton: true,
    actions: []
  }
}

// Loader Variant
export const Loader: Story = {
  args: {
    message: 'Processing your request, please wait...',
    variant: 'loader',
    showIcon: true,
    showCloseButton: false,
    actions: []
  }
}

// With Action Buttons
export const WithActions: Story = {
  args: {
    message: 'Are you sure you want to delete this? This action cannot be undone.',
    variant: 'neutral',
    showIcon: false,
    showCloseButton: true,
    actions: [
      {
        label: 'Delete',
        emphasis: 'low' as const,
        color: 'white' as const,
        handler: () => console.log('Delete clicked')
      },
      {
        label: 'Archive',
        emphasis: 'high' as const,
        color: 'blue' as const,
        handler: () => console.log('Archive clicked')
      }
    ]
  }
}

// All Variants Showcase
export const AllVariants: Story = {
  render: () => ({
    components: { SnackBar },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; min-width: 500px;">
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 style="margin: 0; font-size: 14px; color: #666;">Neutral</h3>
          <SnackBar 
            message="Are you sure you want to delete this? This action cannot be undone."
            variant="neutral"
            :showIcon="false"
          />
          <SnackBar 
            message="Are you sure you want to delete this? This action cannot be undone."
            variant="neutral"
            :showIcon="true"
          />
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 style="margin: 0; font-size: 14px; color: #666;">Success</h3>
          <SnackBar 
            message="File successfully uploaded and processed."
            variant="success"
            :showIcon="true"
          />
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 style="margin: 0; font-size: 14px; color: #666;">Attention</h3>
          <SnackBar 
            message="Please review your changes before continuing."
            variant="attention"
            :showIcon="true"
          />
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 style="margin: 0; font-size: 14px; color: #666;">Critical</h3>
          <SnackBar 
            message="Unable to save changes. Please try again."
            variant="critical"
            :showIcon="true"
          />
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 style="margin: 0; font-size: 14px; color: #666;">Information</h3>
          <SnackBar 
            message="New features are now available in your dashboard."
            variant="information"
            :showIcon="true"
          />
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 style="margin: 0; font-size: 14px; color: #666;">Loader</h3>
          <SnackBar 
            message="Processing your request, please wait..."
            variant="loader"
            :showIcon="true"
            :showCloseButton="false"
          />
        </div>
      </div>
    `
  })
}

// Different Message Lengths
export const MessageLengths: Story = {
  render: () => ({
    components: { SnackBar },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; min-width: 500px;">
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 style="margin: 0; font-size: 14px; color: #666;">Short Message</h3>
          <SnackBar 
            message="Success!"
            variant="success"
            :showIcon="true"
          />
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 style="margin: 0; font-size: 14px; color: #666;">Medium Message</h3>
          <SnackBar 
            message="Your changes have been saved successfully."
            variant="success"
            :showIcon="true"
          />
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h3 style="margin: 0; font-size: 14px; color: #666;">Long Message</h3>
          <SnackBar 
            message="Are you sure you want to delete this item? This action cannot be undone and will permanently remove all associated data."
            variant="critical"
            :showIcon="true"
          />
        </div>
      </div>
    `
  })
}

// Interactive Demo
export const InteractiveDemo: Story = {
  args: {
    message: 'Are you sure you want to delete this? This action cannot be undone.',
    variant: 'neutral',
    showIcon: true,
    showCloseButton: true,
    actions: [
      {
        label: 'Cancel',
        emphasis: 'low' as const,
        color: 'white' as const,
        handler: () => alert('Cancel clicked!')
      },
      {
        label: 'Delete',
        emphasis: 'high' as const,
        color: 'blue' as const,
        handler: () => alert('Delete clicked!')
      }
    ]
  }
} 
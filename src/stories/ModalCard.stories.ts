import type { Meta, StoryObj } from '@storybook/vue3'
import ModalCard from '../components/ModalCard.vue'

const meta: Meta<typeof ModalCard> = {
  title: 'Components/ModalCard',
  component: ModalCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    headIcon: {
      control: 'boolean',
      description: 'Show/hide the head icon'
    },
    title: {
      control: 'text',
      description: 'Modal title'
    },
    description: {
      control: 'text',
      description: 'Modal description'
    },
    contentArea: {
      control: 'boolean',
      description: 'Show/hide the content area'
    },
    leftButton: {
      control: 'boolean',
      description: 'Show/hide the left button'
    },
    rightButton1: {
      control: 'boolean',
      description: 'Show/hide the first right button'
    },
    rightButton2: {
      control: 'boolean',
      description: 'Show/hide the second right button'
    },
    size: {
      control: { type: 'select' },
      options: ['s', 'm', 'l'],
      description: 'Modal size'
    },
    status: {
      control: { type: 'select' },
      options: ['default', 'success', 'warning', 'info', 'error'],
      description: 'Modal status'
    },
    type: {
      control: { type: 'select' },
      options: ['inputs', 'multi-section', 'text', 'rich-text', 'table'],
      description: 'Content area type'
    },
    closeActionState: {
      control: { type: 'select' },
      options: ['default', 'hover', 'active', 'pressed', 'disabled'],
      description: 'Close button state'
    },
    leftButtonLabel: {
      control: 'text',
      description: 'Left button label'
    },
    leftButtonState: {
      control: { type: 'select' },
      options: ['default', 'hover', 'active', 'pressed', 'disabled'],
      description: 'Left button state'
    },
    rightButton1Label: {
      control: 'text',
      description: 'First right button label'
    },
    rightButton1State: {
      control: { type: 'select' },
      options: ['default', 'hover', 'active', 'pressed', 'disabled'],
      description: 'First right button state'
    },
    rightButton2Label: {
      control: 'text',
      description: 'Second right button label'
    },
    rightButton2State: {
      control: { type: 'select' },
      options: ['default', 'hover', 'active', 'pressed', 'disabled'],
      description: 'Second right button state'
    },
    showBadge: {
      control: 'boolean',
      description: 'Show/hide the badge next to title'
    },
    badgeLabel: {
      control: 'text',
      description: 'Badge label text'
    },
    badgeColor: {
      control: { type: 'select' },
      options: ['Green', 'Blue', 'Yellow', 'Red', 'Cyan', 'Violet', 'Rose', 'White', 'Grey'],
      description: 'Badge color variant'
    },
    badgeEmphasis: {
      control: { type: 'select' },
      options: ['Low', 'High'],
      description: 'Badge emphasis level'
    },
    leftButtonIcon: {
      control: 'text',
      description: 'Left button icon (FontAwesome class or short name)'
    },
    leftButtonIconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Left button icon position'
    },
    rightButton1Icon: {
      control: 'text',
      description: 'First right button icon (FontAwesome class or short name)'
    },
    rightButton1IconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'First right button icon position'
    },
    rightButton2Icon: {
      control: 'text',
      description: 'Second right button icon (FontAwesome class or short name)'
    },
    rightButton2IconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Second right button icon position'
    }
  },
  args: {
    headIcon: true,
    title: 'Modal Title',
    description: 'This is a description of what this modal does.',
    contentArea: true,
    leftButton: true,
    rightButton1: false,
    rightButton2: true,
    size: 's',
    status: 'default',
    type: 'inputs',
    closeActionState: 'default',
    leftButtonLabel: 'Cancel',
    leftButtonIcon: 'times',
    leftButtonIconPosition: 'left',
    leftButtonState: 'default',
    rightButton1Label: 'Secondary',
    rightButton1Icon: '',
    rightButton1IconPosition: 'left',
    rightButton1State: 'default',
    rightButton2Label: 'Confirm',
    rightButton2Icon: 'check',
    rightButton2IconPosition: 'left',
    rightButton2State: 'default',
    showBadge: true,
    badgeLabel: 'Hello',
    badgeColor: 'Blue',
    badgeEmphasis: 'Low'
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}

export const Small: Story = {
  args: {
    size: 's',
    leftButtonIcon: 'times',
    rightButton2Icon: 'check'
  }
}

export const Medium: Story = {
  args: {
    size: 'm'
  }
}

export const Large: Story = {
  args: {
    size: 'l'
  }
}

export const Success: Story = {
  args: {
    status: 'success',
    title: 'Success Modal',
    description: 'Operation completed successfully!'
  }
}

export const Warning: Story = {
  args: {
    status: 'warning',
    title: 'Warning Modal',
    description: 'Please review your input before proceeding.'
  }
}

export const Info: Story = {
  args: {
    status: 'info',
    title: 'Information Modal',
    description: 'Here is some important information for you.'
  }
}

export const Error: Story = {
  args: {
    status: 'error',
    title: 'Error Modal',
    description: 'Something went wrong. Please try again.'
  }
}

export const FormType: Story = {
  args: {
    type: 'inputs',
    title: 'Create Objective',
    description: 'Fill in the details to create a new objective.'
  }
}

export const ConfirmationType: Story = {
  args: {
    type: 'text',
    title: 'Confirm Action',
    description: 'Are you sure you want to proceed with this action?',
    contentArea: false
  }
}

export const InformationType: Story = {
  args: {
    type: 'rich-text',
    title: 'Information',
    description: 'Important information about your account.',
    contentArea: false
  }
}

export const WithoutButtons: Story = {
  args: {
    leftButton: false,
    rightButton1: false,
    rightButton2: false
  }
}

export const SmallInfo: Story = {
  args: {
    size: 's',
    status: 'info',
    title: 'Quick Info',
    description: 'A small informational modal.',
    contentArea: false
  }
}

export const ContentAreaTest: Story = {
  args: {
    contentArea: true,
    type: 'inputs',
    title: 'Form Modal',
    description: 'This modal shows the content area with input fields.'
  }
}

export const ButtonStates: Story = {
  args: {
    title: 'Button States Demo',
    description: 'Testing different button states.',
    leftButtonState: 'hover',
    rightButton2State: 'active'
  }
}

export const CloseButtonStates: Story = {
  args: {
    title: 'Close Button States',
    description: 'Testing different close button states.',
    closeActionState: 'hover'
  }
}

export const WithBadge: Story = {
  args: {
    title: 'Modal with Badge',
    description: 'This modal shows a badge next to the title.',
    showBadge: true,
    badgeLabel: 'New',
    badgeColor: 'Blue',
    badgeEmphasis: 'Low'
  }
}

export const WithHighEmphasisBadge: Story = {
  args: {
    title: 'Modal with High Emphasis Badge',
    description: 'This modal shows a high emphasis badge.',
    showBadge: true,
    badgeLabel: 'Important',
    badgeColor: 'Red',
    badgeEmphasis: 'High'
  }
}

export const WithGreenBadge: Story = {
  args: {
    title: 'Success Modal with Badge',
    description: 'This modal shows a green success badge.',
    status: 'success',
    showBadge: true,
    badgeLabel: 'Success',
    badgeColor: 'Green',
    badgeEmphasis: 'Low'
  }
}

export const WithYellowBadge: Story = {
  args: {
    title: 'Warning Modal with Badge',
    description: 'This modal shows a yellow warning badge.',
    status: 'warning',
    showBadge: true,
    badgeLabel: 'Warning',
    badgeColor: 'Yellow',
    badgeEmphasis: 'High'
  }
}

export const WithButtonIcons: Story = {
  args: {
    title: 'Modal with Button Icons',
    description: 'This modal shows buttons with icons.',
    leftButtonIcon: 'times',
    leftButtonIconPosition: 'left',
    rightButton1Icon: 'gear',
    rightButton1IconPosition: 'left',
    rightButton1: true,
    rightButton2Icon: 'check',
    rightButton2IconPosition: 'left'
  }
}

export const WithRightIcons: Story = {
  args: {
    title: 'Modal with Right Icons',
    description: 'This modal shows buttons with icons on the right.',
    leftButtonIcon: 'arrow-left',
    leftButtonIconPosition: 'left',
    rightButton1Icon: 'download',
    rightButton1IconPosition: 'right',
    rightButton1: true,
    rightButton2Icon: 'arrow-right',
    rightButton2IconPosition: 'right'
  }
}

export const WithMixedIcons: Story = {
  args: {
    title: 'Modal with Mixed Icon Positions',
    description: 'This modal shows buttons with icons in different positions.',
    leftButtonIcon: 'times',
    leftButtonIconPosition: 'left',
    rightButton1Icon: 'gear',
    rightButton1IconPosition: 'left',
    rightButton1: true,
    rightButton2Icon: 'arrow-right',
    rightButton2IconPosition: 'right'
  }
}

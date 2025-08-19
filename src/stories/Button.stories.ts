import type { Meta, StoryObj } from '@storybook/vue3'
import Button from '../components/Button.vue'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label text'
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'dark', 'white', 'destructive'],
      description: 'Button variant'
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Button size'
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'active', 'pressed', 'disabled'],
      description: 'Button state'
    },
    icon: {
      control: 'text',
      description: 'Font Awesome icon class'
    },
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right'],
      description: 'Icon position'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state'
    }
  },
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'md',
    state: 'default',
    iconPosition: 'left',
    disabled: false
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary Button'
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary Button'
  }
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    label: 'Ghost Button'
  }
}

export const Dark: Story = {
  args: {
    variant: 'dark',
    label: 'Dark Button'
  }
}

export const White: Story = {
  args: {
    variant: 'white',
    label: 'White Button'
  }
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    label: 'Destructive Button'
  }
}

export const Small: Story = {
  args: {
    size: 'sm',
    label: 'Small Button'
  }
}

export const Medium: Story = {
  args: {
    size: 'md',
    label: 'Medium Button'
  }
}

export const Large: Story = {
  args: {
    size: 'lg',
    label: 'Large Button'
  }
}

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    label: 'XS Button'
  }
}

export const WithIconLeft: Story = {
  args: {
    icon: 'plus',
    label: 'Add Item',
    iconPosition: 'left'
  }
}

export const WithIconRight: Story = {
  args: {
    icon: 'arrow-right',
    label: 'Continue',
    iconPosition: 'right'
  }
}

export const IconOnly: Story = {
  args: {
    icon: 'gear',
    label: '',
    iconPosition: 'left'
  }
}

export const WithUserIcon: Story = {
  args: {
    icon: 'user',
    label: 'User Profile',
    iconPosition: 'left'
  }
}

export const WithFullIconClass: Story = {
  args: {
    icon: 'fa-solid fa-user-circle',
    label: 'User Circle',
    iconPosition: 'left'
  }
}

export const HoverState: Story = {
  args: {
    state: 'hover',
    label: 'Hover Button'
  }
}

export const ActiveState: Story = {
  args: {
    state: 'active',
    label: 'Active Button'
  }
}

export const PressedState: Story = {
  args: {
    state: 'pressed',
    label: 'Pressed Button'
  }
}

export const DisabledState: Story = {
  args: {
    state: 'disabled',
    label: 'Disabled Button'
  }
}

export const AllVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
        <div style="display: flex; gap: 12px; align-items: center;">
          <Button variant="primary" label="Primary" />
          <Button variant="secondary" label="Secondary" />
          <Button variant="ghost" label="Ghost" />
          <Button variant="dark" label="Dark" />
          <Button variant="white" label="White" />
          <Button variant="destructive" label="Destructive" />
        </div>
        <div style="display: flex; gap: 12px; align-items: center;">
          <Button size="xs" label="XS" />
          <Button size="sm" label="Small" />
          <Button size="md" label="Medium" />
          <Button size="lg" label="Large" />
        </div>
        <div style="display: flex; gap: 12px; align-items: center;">
          <Button icon="plus" label="Add" />
          <Button icon="arrow-right" label="Continue" iconPosition="right" />
          <Button icon="gear" label="" />
        </div>
      </div>
    `
  })
}

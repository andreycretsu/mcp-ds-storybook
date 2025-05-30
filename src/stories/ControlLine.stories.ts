import ControlLine from '../components/ControlLine.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof ControlLine> = {
  title: 'Components/ControlLine',
  component: ControlLine,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['toggle', 'checkbox', 'radio'],
    },
    size: {
      control: { type: 'select' },
      options: ['M', 'S'],
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'error', 'disabled'],
    },
    active: { control: 'boolean' },
    labelAlign: { control: 'boolean', name: 'Label Left' },
    label: { control: 'text' },
    description: { control: 'text' },
    optional: { control: 'boolean' },
    icon: { control: 'text' },
    partial: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    type: 'toggle',
    size: 'M',
    state: 'default',
    active: false,
    labelAlign: true,
    label: 'Control label',
    description: '',
    optional: false,
    icon: '',
    partial: false,
    disabled: false,
  },
}
export default meta

type Story = StoryObj<typeof ControlLine>

export const Toggle: Story = {
  args: {
    type: 'toggle',
    label: 'Toggle',
  },
}

export const Checkbox: Story = {
  args: {
    type: 'checkbox',
    label: 'Checkbox',
  },
}

export const Radio: Story = {
  args: {
    type: 'radio',
    label: 'Radio',
  },
}

export const Error: Story = {
  args: {
    state: 'error',
    label: 'Error state',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Disabled',
  },
}

export const WithIcon: Story = {
  args: {
    icon: 'star',
    label: 'With icon',
  },
}

export const WithDescription: Story = {
  args: {
    description: 'This is a description',
    label: 'With description',
  },
}

export const PartialCheckbox: Story = {
  args: {
    type: 'checkbox',
    partial: true,
    label: 'Partial (indeterminate)',
  },
}

export const SmallSize: Story = {
  args: {
    size: 'S',
    label: 'Small size',
  },
} 
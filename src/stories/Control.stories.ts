import type { Meta, StoryObj } from '@storybook/vue3';
import Control from '../components/Control.vue';

const meta = {
  title: 'Components/Control',
  component: Control,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['checkbox', 'toggle', 'radio'],
      description: 'Type of control',
    },
    size: {
      control: 'select',
      options: ['M', 'S'],
      description: 'Size of control',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'disabled'],
      description: 'Visual state',
    },
    active: {
      control: 'boolean',
      description: 'Active (checked/on/selected)',
    },
  },
} satisfies Meta<typeof Control>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checkbox: Story = {
  args: {
    type: 'checkbox',
    size: 'M',
    state: 'default',
    active: false,
  },
};

export const CheckboxActive: Story = {
  args: {
    type: 'checkbox',
    size: 'M',
    state: 'default',
    active: true,
  },
};

export const Toggle: Story = {
  args: {
    type: 'toggle',
    size: 'M',
    state: 'default',
    active: false,
  },
};

export const ToggleActive: Story = {
  args: {
    type: 'toggle',
    size: 'M',
    state: 'default',
    active: true,
  },
};

export const Radio: Story = {
  args: {
    type: 'radio',
    size: 'M',
    state: 'default',
    active: false,
  },
};

export const RadioActive: Story = {
  args: {
    type: 'radio',
    size: 'M',
    state: 'default',
    active: true,
  },
}; 
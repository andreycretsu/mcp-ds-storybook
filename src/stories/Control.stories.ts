import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
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

function interactiveTemplate(args: any) {
  const active = ref(args.active ?? false);
  const hover = ref(false);
  return {
    components: { Control },
    setup() {
      return { args, active, hover };
    },
    template: `
      <Control
        v-bind="args"
        :active="active"
        :state="hover ? 'hover' : args.state"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
        @click="active = !active"
        style="cursor: pointer;"
      />
    `,
  };
}

export const Checkbox: Story = {
  args: {
    type: 'checkbox',
    size: 'M',
    state: 'default',
    active: false,
  },
  render: interactiveTemplate,
};

export const CheckboxActive: Story = {
  args: {
    type: 'checkbox',
    size: 'M',
    state: 'default',
    active: true,
  },
  render: interactiveTemplate,
};

export const CheckboxHover: Story = {
  args: {
    type: 'checkbox',
    size: 'M',
    state: 'hover',
    active: false,
  },
};

export const CheckboxDisabled: Story = {
  args: {
    type: 'checkbox',
    size: 'M',
    state: 'disabled',
    active: false,
  },
};

export const Toggle: Story = {
  args: {
    type: 'toggle',
    size: 'M',
    state: 'default',
    active: false,
  },
  render: interactiveTemplate,
};

export const ToggleActive: Story = {
  args: {
    type: 'toggle',
    size: 'M',
    state: 'default',
    active: true,
  },
  render: interactiveTemplate,
};

export const ToggleHover: Story = {
  args: {
    type: 'toggle',
    size: 'M',
    state: 'hover',
    active: false,
  },
};

export const ToggleDisabled: Story = {
  args: {
    type: 'toggle',
    size: 'M',
    state: 'disabled',
    active: false,
  },
};

export const Radio: Story = {
  args: {
    type: 'radio',
    size: 'M',
    state: 'default',
    active: false,
  },
  render: interactiveTemplate,
};

export const RadioActive: Story = {
  args: {
    type: 'radio',
    size: 'M',
    state: 'default',
    active: true,
  },
  render: interactiveTemplate,
};

export const RadioHover: Story = {
  args: {
    type: 'radio',
    size: 'M',
    state: 'hover',
    active: false,
  },
};

export const RadioDisabled: Story = {
  args: {
    type: 'radio',
    size: 'M',
    state: 'disabled',
    active: false,
  },
}; 
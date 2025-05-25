import type { Meta, StoryObj } from '@storybook/vue3';
import Icon from '../components/Icon.vue';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'text',
      description: 'FontAwesome icon class, e.g. fa-solid fa-user, fa-regular fa-user, fa-brands fa-github',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the icon (square container): xs, sm, md, lg, xl',
    },
    color: {
      control: 'color',
      description: 'Icon color',
    },
    spin: {
      control: 'boolean',
      description: 'Spin animation',
    },
    pulse: {
      control: 'boolean',
      description: 'Pulse animation',
    },
    fixedWidth: {
      control: 'boolean',
      description: 'Fixed width',
    },
    customClass: {
      control: 'text',
      description: 'Custom class for additional styling',
    },
    ariaLabel: {
      control: 'text',
      description: 'ARIA label',
    },
    ariaHidden: {
      control: 'boolean',
      description: 'ARIA hidden',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    icon: 'fa-solid fa-user',
    size: 'md',
    color: '#2563EB',
  },
};

export const Regular: Story = {
  args: {
    icon: 'fa-regular fa-user',
    size: 'md',
    color: '#10B981',
  },
};

export const Brands: Story = {
  args: {
    icon: 'fa-brands fa-github',
    size: 'md',
    color: '#111827',
  },
};

export const Spin: Story = {
  args: {
    icon: 'fa-solid fa-sync',
    size: 'md',
    color: '#F59E42',
    spin: true,
  },
};

export const Pulse: Story = {
  args: {
    icon: 'fa-solid fa-heart',
    size: 'md',
    color: '#EF4444',
    pulse: true,
  },
};

export const FixedWidth: Story = {
  args: {
    icon: 'fa-solid fa-align-left',
    size: 'md',
    color: '#6366F1',
    fixedWidth: true,
  },
}; 
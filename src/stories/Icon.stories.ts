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
      options: ['XS-8', 'S-12', 'M-16', 'L-20', 'XL-24'],
      description: 'Size of the icon (square container): XS-8, S-12, M-16, L-20, XL-24',
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
    size: 'M-16',
    color: '#2563EB',
  },
};

export const Regular: Story = {
  args: {
    icon: 'fa-regular fa-user',
    size: 'M-16',
    color: '#10B981',
  },
};

export const Brands: Story = {
  args: {
    icon: 'fa-brands fa-github',
    size: 'M-16',
    color: '#111827',
  },
};

export const Spin: Story = {
  args: {
    icon: 'fa-solid fa-sync',
    size: 'M-16',
    color: '#F59E42',
    spin: true,
  },
};

export const Pulse: Story = {
  args: {
    icon: 'fa-solid fa-heart',
    size: 'M-16',
    color: '#EF4444',
    pulse: true,
  },
};

export const FixedWidth: Story = {
  args: {
    icon: 'fa-solid fa-align-left',
    size: 'M-16',
    color: '#6366F1',
    fixedWidth: true,
  },
}; 
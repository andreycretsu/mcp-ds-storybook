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
      control: 'text',
      description: 'Font size (e.g. 24px, 1.5em, 2rem)',
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
    size: '32px',
    color: '#2563EB',
  },
};

export const Regular: Story = {
  args: {
    icon: 'fa-regular fa-user',
    size: '32px',
    color: '#10B981',
  },
};

export const Brands: Story = {
  args: {
    icon: 'fa-brands fa-github',
    size: '32px',
    color: '#111827',
  },
};

export const Spin: Story = {
  args: {
    icon: 'fa-solid fa-sync',
    size: '32px',
    color: '#F59E42',
    spin: true,
  },
};

export const Pulse: Story = {
  args: {
    icon: 'fa-solid fa-heart',
    size: '32px',
    color: '#EF4444',
    pulse: true,
  },
};

export const FixedWidth: Story = {
  args: {
    icon: 'fa-solid fa-align-left',
    size: '32px',
    color: '#6366F1',
    fixedWidth: true,
  },
}; 
import type { Meta, StoryObj } from '@storybook/vue3'
import Banner from '../components/Banner.vue'
import PromoBanner from '../components/PromoBanner.vue'
import InfoBanner from '../components/InfoBanner.vue'
import SuccessBanner from '../components/SuccessBanner.vue'
import WarningBanner from '../components/WarningBanner.vue'
import ErrorBanner from '../components/ErrorBanner.vue'
import Icon from '../components/Icon.vue'

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'info', 'success', 'warning', 'error', 'promotional', 'muted'],
      description: 'Banner variant'
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
      description: 'Banner size'
    },
    icon: {
      control: 'text',
      description: 'Icon name (Font Awesome class) or component'
    },
    linkText: {
      control: 'text',
      description: 'Link text (e.g., "Learn more")'
    },
    linkHref: {
      control: 'text',
      description: 'Link href'
    },
    actionText: {
      control: 'text',
      description: 'CTA button text'
    },
    actionVariant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'dark', 'white', 'destructive'],
      description: 'CTA button variant'
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether to show the close button'
    },
    visible: {
      control: 'boolean',
      description: 'Whether the banner is currently visible'
    }
  },
  args: {
    variant: 'default',
    size: 'default',
    dismissible: true,
    visible: true
  }
}

export default meta
type Story = StoryObj<typeof Banner>

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'This is a default banner message.'
  },
  render: (args) => ({
    components: { Banner },
    setup() {
      return { args }
    },
    template: '<Banner v-bind="args">This is a default banner message.</Banner>'
  })
}

export const Info: Story = {
  args: {
    variant: 'info',
    icon: 'fa-solid fa-info-circle'
  },
  render: (args) => ({
    components: { Banner },
    setup() {
      return { args }
    },
    template: '<Banner v-bind="args">New feature available! Check out our latest updates.</Banner>'
  })
}

export const Success: Story = {
  args: {
    variant: 'success',
    icon: 'fa-solid fa-check-circle'
  },
  render: (args) => ({
    components: { Banner },
    setup() {
      return { args }
    },
    template: '<Banner v-bind="args">Your changes have been saved successfully.</Banner>'
  })
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    icon: 'fa-solid fa-exclamation-triangle'
  },
  render: (args) => ({
    components: { Banner },
    setup() {
      return { args }
    },
    template: '<Banner v-bind="args">Please review your settings before proceeding.</Banner>'
  })
}

export const Error: Story = {
  args: {
    variant: 'error',
    icon: 'fa-solid fa-times-circle'
  },
  render: (args) => ({
    components: { Banner },
    setup() {
      return { args }
    },
    template: '<Banner v-bind="args">Something went wrong. Please try again.</Banner>'
  })
}

export const Promotional: Story = {
  args: {
    variant: 'promotional'
  },
  render: (args) => ({
    components: { Banner },
    setup() {
      return { args }
    },
    template: '<Banner v-bind="args">🎉 Special offer: Get 50% off on all plans this month!</Banner>'
  })
}

export const WithLink: Story = {
  args: {
    variant: 'info',
    icon: 'fa-solid fa-info-circle',
    linkText: 'Learn more',
    linkHref: '#'
  },
  render: (args) => ({
    components: { Banner },
    setup() {
      return { args }
    },
    template: '<Banner v-bind="args">New feature available! Check out our latest updates.</Banner>'
  })
}

export const WithAction: Story = {
  args: {
    variant: 'success',
    icon: 'fa-solid fa-check-circle',
    actionText: 'View Details',
    actionVariant: 'secondary'
  },
  render: (args) => ({
    components: { Banner },
    setup() {
      return { args }
    },
    template: '<Banner v-bind="args">Your changes have been saved successfully.</Banner>'
  })
}

export const WithLinkAndAction: Story = {
  args: {
    variant: 'promotional',
    linkText: 'Learn more',
    linkHref: '#',
    actionText: 'Get Started',
    actionVariant: 'secondary'
  },
  render: (args) => ({
    components: { Banner },
    setup() {
      return { args }
    },
    template: '<Banner v-bind="args">🎉 Special offer: Get 50% off on all plans this month!</Banner>'
  })
}

export const NotDismissible: Story = {
  args: {
    variant: 'info',
    dismissible: false,
    icon: 'fa-solid fa-info-circle'
  },
  render: (args) => ({
    components: { Banner },
    setup() {
      return { args }
    },
    template: '<Banner v-bind="args">This banner cannot be dismissed.</Banner>'
  })
}

export const Small: Story = {
  args: {
    variant: 'info',
    size: 'sm',
    icon: 'fa-solid fa-info-circle'
  },
  render: (args) => ({
    components: { Banner },
    setup() {
      return { args }
    },
    template: '<Banner v-bind="args">Small banner message.</Banner>'
  })
}

export const Large: Story = {
  args: {
    variant: 'info',
    size: 'lg',
    icon: 'fa-solid fa-info-circle'
  },
  render: (args) => ({
    components: { Banner },
    setup() {
      return { args }
    },
    template: '<Banner v-bind="args">Large banner message with more content.</Banner>'
  })
}

export const Muted: Story = {
  args: {
    variant: 'muted'
  },
  render: (args) => ({
    components: { Banner },
    setup() {
      return { args }
    },
    template: '<Banner v-bind="args">This is a muted banner message.</Banner>'
  })
}

// Convenience Components
export const PromoBannerExample: Story = {
  render: () => ({
    components: { PromoBanner },
    template: '<PromoBanner>🎉 Special promotional offer available now!</PromoBanner>'
  })
}

export const InfoBannerExample: Story = {
  render: () => ({
    components: { InfoBanner, Icon },
    template: `
      <InfoBanner 
        icon="fa-solid fa-info-circle"
        linkText="Learn more"
        linkHref="#"
      >
        New feature available! Check out our latest updates.
      </InfoBanner>
    `
  })
}

export const SuccessBannerExample: Story = {
  render: () => ({
    components: { SuccessBanner },
    template: `
      <SuccessBanner 
        icon="fa-solid fa-check-circle"
        actionText="View Details"
      >
        Your changes have been saved successfully.
      </SuccessBanner>
    `
  })
}

export const WarningBannerExample: Story = {
  render: () => ({
    components: { WarningBanner },
    template: `
      <WarningBanner 
        icon="fa-solid fa-exclamation-triangle"
        linkText="Review settings"
      >
        Please review your settings before proceeding.
      </WarningBanner>
    `
  })
}

export const ErrorBannerExample: Story = {
  render: () => ({
    components: { ErrorBanner },
    template: `
      <ErrorBanner 
        icon="fa-solid fa-times-circle"
        actionText="Try Again"
      >
        Something went wrong. Please try again.
      </ErrorBanner>
    `
  })
}

export const AllVariants: Story = {
  render: () => ({
    components: { Banner },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Banner variant="default">Default banner message.</Banner>
        <Banner variant="info" icon="fa-solid fa-info-circle">Info banner message.</Banner>
        <Banner variant="success" icon="fa-solid fa-check-circle">Success banner message.</Banner>
        <Banner variant="warning" icon="fa-solid fa-exclamation-triangle">Warning banner message.</Banner>
        <Banner variant="error" icon="fa-solid fa-times-circle">Error banner message.</Banner>
        <Banner variant="promotional">🎉 Promotional banner message.</Banner>
        <Banner variant="muted">Muted banner message.</Banner>
      </div>
    `
  })
}


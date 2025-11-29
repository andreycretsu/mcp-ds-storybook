import type { Meta, StoryObj } from '@storybook/vue3'
import Kbd from '../components/Kbd.vue'
import KbdAtom from '../components/KbdAtom.vue'
import KbdConnector from '../components/KbdConnector.vue'

const meta: Meta<typeof Kbd> = {
  title: 'Components/Kbd',
  component: Kbd,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    combined: {
      control: 'boolean',
      description: 'Show connector lines between keys'
    },
    size: {
      control: { type: 'select' },
      options: ['M-20', 'S-16'],
      description: 'Keyboard shortcut size'
    },
    value: {
      control: { type: 'select' },
      options: ['1', '2', '3'],
      description: 'Number of keys (1, 2, or 3)'
    }
  },
  args: {
    combined: true,
    size: 'M-20',
    value: '1'
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'M-20',
    value: '1'
  }
}

export const SingleKey: Story = {
  args: {
    size: 'M-20',
    value: '1',
    combined: false
  }
}

export const TwoKeys: Story = {
  args: {
    size: 'M-20',
    value: '2',
    combined: true
  }
}

export const ThreeKeys: Story = {
  args: {
    size: 'M-20',
    value: '3',
    combined: true
  }
}

export const SmallSize: Story = {
  args: {
    size: 'S-16',
    value: '1'
  }
}

export const SmallTwoKeys: Story = {
  args: {
    size: 'S-16',
    value: '2',
    combined: false
  }
}

export const SmallThreeKeys: Story = {
  args: {
    size: 'S-16',
    value: '3',
    combined: false
  }
}

export const AllSizes: Story = {
  render: () => ({
    components: { Kbd },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; align-items: flex-start;">
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <h3 style="margin: 0; font-size: 14px; font-weight: 600;">Size M-20</h3>
          <div style="display: flex; gap: 16px; align-items: center;">
            <Kbd size="M-20" value="1" :combined="false" />
            <Kbd size="M-20" value="2" :combined="true" />
            <Kbd size="M-20" value="3" :combined="true" />
          </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <h3 style="margin: 0; font-size: 14px; font-weight: 600;">Size S-16</h3>
          <div style="display: flex; gap: 16px; align-items: center;">
            <Kbd size="S-16" value="1" :combined="false" />
            <Kbd size="S-16" value="2" :combined="false" />
            <Kbd size="S-16" value="3" :combined="false" />
          </div>
        </div>
      </div>
    `
  })
}

// KbdAtom stories
const atomMeta: Meta<typeof KbdAtom> = {
  title: 'Components/KbdAtom',
  component: KbdAtom,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    textValue: {
      control: 'text',
      description: 'Text value for text mode'
    },
    size: {
      control: { type: 'select' },
      options: ['20', '16'],
      description: 'Atom size'
    },
    icon: {
      control: { type: 'select' },
      options: ['⌘ command', '⇧ shift', '⌫ delete-left', '⌥ option', '⌃ control', '← arrow-left', '→ arrow-right', '↑ arrow-up', '↓ arrow-down', 'windows', 'no'],
      description: 'Icon type'
    },
    text: {
      control: 'boolean',
      description: 'Text mode (when icon is "no")'
    }
  },
  args: {
    textValue: 'Esc',
    size: '20',
    icon: 'no',
    text: true
  }
}

export const AtomDefault: StoryObj<typeof atomMeta> = {
  render: (args) => ({
    components: { KbdAtom },
    setup() {
      return { args }
    },
    template: '<KbdAtom v-bind="args" />'
  }),
  args: {
    textValue: 'Esc',
    size: '20',
    icon: 'no',
    text: true
  }
}

export const AtomIcons: StoryObj<typeof atomMeta> = {
  render: () => ({
    components: { KbdAtom },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
          <KbdAtom size="20" icon="⌘ command" :text="false" />
          <KbdAtom size="20" icon="⇧ shift" :text="false" />
          <KbdAtom size="20" icon="⌫ delete-left" :text="false" />
          <KbdAtom size="20" icon="⌥ option" :text="false" />
          <KbdAtom size="20" icon="⌃ control" :text="false" />
        </div>
        <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
          <KbdAtom size="20" icon="← arrow-left" :text="false" />
          <KbdAtom size="20" icon="→ arrow-right" :text="false" />
          <KbdAtom size="20" icon="↑ arrow-up" :text="false" />
          <KbdAtom size="20" icon="↓ arrow-down" :text="false" />
          <KbdAtom size="20" icon="windows" :text="false" />
        </div>
        <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
          <KbdAtom size="20" textValue="Esc" icon="no" :text="true" />
          <KbdAtom size="20" textValue="Enter" icon="no" :text="true" />
          <KbdAtom size="20" textValue="Tab" icon="no" :text="true" />
        </div>
      </div>
    `
  })
}

// KbdConnector stories
const connectorMeta: Meta<typeof KbdConnector> = {
  title: 'Components/KbdConnector',
  component: KbdConnector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['M-20', 'S-16'],
      description: 'Connector size'
    }
  },
  args: {
    size: 'M-20'
  }
}

export const ConnectorDefault: StoryObj<typeof connectorMeta> = {
  render: (args) => ({
    components: { KbdConnector },
    setup() {
      return { args }
    },
    template: '<KbdConnector v-bind="args" />'
  }),
  args: {
    size: 'M-20'
  }
}

export const ConnectorSizes: StoryObj<typeof connectorMeta> = {
  render: () => ({
    components: { KbdConnector },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; align-items: flex-start;">
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <h3 style="margin: 0; font-size: 14px; font-weight: 600;">Size M-20</h3>
          <div style="display: flex; gap: 16px; align-items: center;">
            <KbdConnector size="M-20" />
          </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <h3 style="margin: 0; font-size: 14px; font-weight: 600;">Size S-16</h3>
          <div style="display: flex; gap: 16px; align-items: center;">
            <KbdConnector size="S-16" />
          </div>
        </div>
      </div>
    `
  })
}

export const ConnectorInContext: StoryObj<typeof connectorMeta> = {
  render: () => ({
    components: { KbdAtom, KbdConnector },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; align-items: flex-start;">
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <h3 style="margin: 0; font-size: 14px; font-weight: 600;">Connector between keys (M-20)</h3>
          <div style="position: relative; display: flex; gap: 4px; align-items: center;">
            <KbdAtom size="20" icon="⇧ shift" :text="false" />
            <div style="position: absolute; left: 24px; top: 0; z-index: 1;">
              <KbdConnector size="M-20" />
            </div>
            <KbdAtom size="20" icon="⌘ command" :text="false" />
          </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <h3 style="margin: 0; font-size: 14px; font-weight: 600;">Connector between keys (S-16)</h3>
          <div style="position: relative; display: flex; gap: 2px; align-items: center;">
            <KbdAtom size="16" icon="⇧ shift" :text="false" />
            <div style="position: absolute; left: 20px; top: 0; z-index: 1;">
              <KbdConnector size="S-16" />
            </div>
            <KbdAtom size="16" icon="⌘ command" :text="false" />
          </div>
        </div>
      </div>
    `
  })
}


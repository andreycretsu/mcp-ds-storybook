import type { Meta, StoryObj } from '@storybook/vue3'
import { ref, onUnmounted } from 'vue'
import Button from '../components/Button.vue'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Sizes and Dimensions

| Size | Height | Padding X (L/R) | Padding Y (T/B) | Font Size | Icon Size | Gap | Border Radius (Fallback) | KBD Size | Label Wrapper Padding |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **24** | 24px | 6px | 6px | 12px (Medium) | S-12 | 2px | 8px | S-16 | 0px 2px |
| **32** | 32px | 8px | 8px | 12px (Medium) | M-16 | 2px | 16px | S-16 | 2px 4px |
| **36** | 36px | 8px | 10px | 14px (Medium) | M-16 | 2px | 20px | S-16 | 1px 4px |
| **40** | 40px | 12px | 10px | 16px (Medium) | L-20 | 4px | 24px | S-16 | 2px 4px |

### Icon Button Dimensions

| Size | Padding X (L/R) | Padding Y (T/B) |
| :--- | :--- | :--- |
| **24** | 10px | 6px |
| **32** | 12px | 8px |
| **36** | 14px | 10px |
| **40** | 14px | 10px |
`
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label text',
      if: { arg: 'type', neq: 'icon-only' }
    },
    lIcon: {
      control: 'boolean',
      description: 'Show left icon'
    },
    rIcon: {
      control: 'boolean',
      description: 'Show right icon',
      if: { arg: 'type', neq: 'icon-only' }
    },
    lIconName: {
      control: 'text',
      description: 'Left icon name (Font Awesome class)'
    },
    rIconName: {
      control: 'text',
      description: 'Right icon name (Font Awesome class)',
      if: { arg: 'type', neq: 'icon-only' }
    },
    kbd: {
      control: 'boolean',
      description: 'Show keyboard shortcut indicator',
      if: { arg: 'type', neq: 'icon-only' }
    },
    kbdValue: {
      control: { type: 'select' },
      options: ['1', '2', '3'],
      description: 'Number of keys in keyboard shortcut (1, 2, or 3)',
      if: { arg: 'type', neq: 'icon-only' }
    },
    kbdCombined: {
      control: 'boolean',
      description: 'Show connector between keys (for 2 or 3 keys)',
      if: { arg: 'type', neq: 'icon-only' }
    },
    kbdIcon1: { 
      control: 'text',
      if: { arg: 'type', neq: 'icon-only' }
    },
    kbdIcon2: { 
      control: 'text',
      if: { arg: 'type', neq: 'icon-only' }
    },
    kbdIcon3: { 
      control: 'text',
      if: { arg: 'type', neq: 'icon-only' }
    },
    kbdModeIcon1: { 
      control: 'boolean',
      description: 'Toggle icon mode for key 1 (True: Auto/Icon, False: Text)',
      if: { arg: 'type', neq: 'icon-only' }
    },
    kbdModeIcon2: { 
      control: 'boolean',
      description: 'Toggle icon mode for key 2 (True: Auto/Icon, False: Text)',
      if: { arg: 'type', neq: 'icon-only' }
    },
    kbdModeIcon3: { 
      control: 'boolean',
      description: 'Toggle icon mode for key 3 (True: Auto/Icon, False: Text)',
      if: { arg: 'type', neq: 'icon-only' }
    },
    successMessage: {
      control: 'text',
      description: 'Text displayed when button is in success state (replaces label)'
    },
    type: {
      control: { type: 'select' },
      options: ['default', 'stretched', 'icon-only'],
      description: 'Button type'
    },
    tone: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'destructive', 'dark'],
      description: 'Button tone/variant'
    },
    dynamicPrimary: {
      control: 'color',
      description: 'Override primary tone background color (for primary tone only)'
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'press', 'focus', 'disable', 'loading', 'success'],
      description: 'Button state'
    },
    size: {
      control: { type: 'select' },
      options: ['24', '32', '36', '40'],
      description: 'Button size'
    }
  },
  args: {
    label: 'Button',
    lIcon: true,
    rIcon: true,
    kbd: false,
    kbdValue: '1',
    kbdCombined: true,
    kbdModeIcon1: true,
    kbdModeIcon2: true,
    kbdModeIcon3: true,
    successMessage: 'Success',
    type: 'default',
    tone: 'primary',
    state: 'default',
    size: '32'
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'default',
    tone: 'primary',
    state: 'default',
    lIcon: true,
    rIcon: true
  }
}

export const Primary: Story = {
  args: {
    tone: 'primary',
    label: 'Button',
    lIcon: true,
    rIcon: true
  }
}

export const Secondary: Story = {
  args: {
    tone: 'secondary',
    label: 'Button',
    lIcon: true,
    rIcon: true
  }
}

export const Destructive: Story = {
  args: {
    tone: 'destructive',
    label: 'Button',
    lIcon: true,
    rIcon: true
  }
}

export const Dark: Story = {
  args: {
    tone: 'dark',
    label: 'Button',
    lIcon: true,
    rIcon: true
  }
}

export const Stretched: Story = {
  args: {
    type: 'stretched',
    tone: 'primary',
    label: 'Button',
    lIcon: true,
    rIcon: true
  }
}

export const IconOnly: Story = {
  args: {
    type: 'icon-only',
    tone: 'primary',
    lIcon: true
  }
}

export const WithKeyboardShortcut: Story = {
  args: {
    tone: 'primary',
    label: 'Button',
    lIcon: true,
    rIcon: true,
    kbd: true,
    kbdValue: '1',
    kbdCombined: false
  }
}

export const WithTwoKeyShortcut: Story = {
  args: {
    tone: 'primary',
    label: 'Button',
    lIcon: true,
    rIcon: true,
    kbd: true,
    kbdValue: '2',
    kbdCombined: true
  }
}

export const WithThreeKeyShortcut: Story = {
  args: {
    tone: 'primary',
    label: 'Button',
    lIcon: true,
    rIcon: true,
    kbd: true,
    kbdValue: '3',
    kbdCombined: true
  }
}

export const WithUncombinedKeys: Story = {
  args: {
    tone: 'primary',
    label: 'Button',
    lIcon: true,
    rIcon: true,
    kbd: true,
    kbdValue: '2',
    kbdCombined: false
  }
}

export const HoverState: Story = {
  args: {
    tone: 'primary',
    label: 'Button',
    state: 'hover',
    lIcon: true,
    rIcon: true
  }
}

export const PressState: Story = {
  args: {
    tone: 'primary',
    label: 'Button',
    state: 'press',
    lIcon: true,
    rIcon: true
  }
}

export const FocusState: Story = {
  args: {
    tone: 'primary',
    label: 'Button',
    state: 'focus',
    lIcon: true,
    rIcon: true
  }
}

export const DisabledState: Story = {
  args: {
    tone: 'primary',
    label: 'Button',
    state: 'disable',
    lIcon: true,
    rIcon: true
  }
}

export const LoadingState: Story = {
  args: {
    tone: 'primary',
    label: 'Button',
    state: 'loading',
    lIcon: true,
    rIcon: true
  }
}

export const SuccessState: Story = {
  args: {
    tone: 'primary',
    label: 'Button',
    state: 'success',
    successMessage: 'Success'
  }
}

export const StateTransition: Story = {
  render: () => ({
    components: { Button },
    setup() {
      const tones = ['primary', 'secondary', 'destructive', 'dark']
      const types = ['default', 'stretched', 'icon-only']
      
      // Create a reactive map for states
      const states = ref<Record<string, 'default' | 'hover' | 'press' | 'loading' | 'success'>>({})
      
      // Initialize states
      tones.forEach(tone => {
        types.forEach(type => {
          states.value[`${tone}-${type}`] = 'default'
        })
      })

      const timeouts: Record<string, { loading: ReturnType<typeof setTimeout> | null, success: ReturnType<typeof setTimeout> | null }> = {}

      const handleMouseEnter = (key: string) => {
        if (states.value[key] === 'default' || states.value[key] === 'hover') {
          states.value[key] = 'hover'
        }
      }
      
      const handleMouseLeave = (key: string) => {
        if (states.value[key] === 'hover') {
          states.value[key] = 'default'
        }
      }
      
      const handleMouseDown = (key: string) => {
        if (states.value[key] === 'hover' || states.value[key] === 'default') {
          states.value[key] = 'press'
        }
      }
      
      const handleMouseUp = (key: string) => {
        if (states.value[key] === 'press') {
          // Clear existing timeouts for this key
          if (timeouts[key]) {
            if (timeouts[key].loading) clearTimeout(timeouts[key].loading)
            if (timeouts[key].success) clearTimeout(timeouts[key].success)
          } else {
            timeouts[key] = { loading: null, success: null }
          }
          
          states.value[key] = 'loading'
          
          timeouts[key].loading = setTimeout(() => {
            states.value[key] = 'success'
            
            timeouts[key].success = setTimeout(() => {
              states.value[key] = 'default'
            }, 2000)
          }, 1500)
        }
      }
      
      onUnmounted(() => {
        Object.values(timeouts).forEach(t => {
          if (t.loading) clearTimeout(t.loading)
          if (t.success) clearTimeout(t.success)
        })
      })
      
      return { 
        tones,
        types,
        states,
        handleMouseEnter,
        handleMouseLeave,
        handleMouseDown,
        handleMouseUp
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px; width: 100%; max-width: 1200px; padding: 20px;">
        <div style="font-size: 14px; color: #666; margin-bottom: -16px;">
          <strong>Interactive Demo:</strong> Hover and click any button to see the transition cycle (default → hover → press → loading → success).
        </div>
        
        <div v-for="tone in tones" :key="tone" style="display: flex; flex-direction: column; gap: 16px;">
          <h3 style="font-family: sans-serif; text-transform: capitalize; margin: 0; color: #333; border-bottom: 1px solid #eee; padding-bottom: 8px;">{{ tone }}</h3>
          
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div v-for="type in types" :key="type" style="display: flex; align-items: center; gap: 16px;">
              <div 
                @mouseenter="handleMouseEnter(tone + '-' + type)"
                @mouseleave="handleMouseLeave(tone + '-' + type)"
                @mousedown="handleMouseDown(tone + '-' + type)"
                @mouseup="handleMouseUp(tone + '-' + type)"
                style="display: inline-block; cursor: pointer;"
              >
                <Button 
                  :tone="tone" 
                  :type="type"
                  :label="type === 'icon-only' ? undefined : 'Button'" 
                  :state="states[tone + '-' + type]"
                  successMessage="Success"
                  :lIcon="true"
                  :rIcon="type !== 'icon-only'"
                />
              </div>
              <div style="font-size: 11px; color: #999; font-family: monospace; width: 150px;">
                {{ type }} ({{ states[tone + '-' + type] }})
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  })
}

export const AllTones: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
        <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
          <Button tone="primary" label="Button" :lIcon="true" :rIcon="true" />
          <Button tone="secondary" label="Button" :lIcon="true" :rIcon="true" />
          <Button tone="destructive" label="Button" :lIcon="true" :rIcon="true" />
          <Button tone="dark" label="Button" :lIcon="true" :rIcon="true" />
        </div>
        <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
          <Button type="icon-only" tone="primary" :lIcon="true" />
          <Button type="icon-only" tone="secondary" :lIcon="true" />
          <Button type="icon-only" tone="destructive" :lIcon="true" />
          <Button type="icon-only" tone="dark" :lIcon="true" />
        </div>
        <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
          <Button tone="primary" label="Button" state="loading" :lIcon="true" :rIcon="true" />
          <Button tone="primary" label="Button" state="success" successMessage="Success" />
          <Button tone="primary" label="Button" state="disable" :lIcon="true" :rIcon="true" />
        </div>
      </div>
    `
  })
}

export const AllStates: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
        <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
          <Button tone="primary" label="Button" state="default" :lIcon="true" :rIcon="true" />
          <Button tone="primary" label="Button" state="hover" :lIcon="true" :rIcon="true" />
          <Button tone="primary" label="Button" state="press" :lIcon="true" :rIcon="true" />
          <Button tone="primary" label="Button" state="focus" :lIcon="true" :rIcon="true" />
        </div>
        <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
          <Button tone="primary" label="Button" state="disable" :lIcon="true" :rIcon="true" />
          <Button tone="primary" label="Button" state="loading" :lIcon="true" :rIcon="true" />
          <Button tone="primary" label="Button" state="success" successMessage="Success" />
        </div>
      </div>
    `
  })
}

export const AllSizes: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; align-items: flex-start;">
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <div style="font-size: 12px; color: #666; font-family: monospace;">Size 24</div>
          <div style="display: flex; gap: 12px; align-items: center;">
            <Button size="24" tone="primary" label="Button" :lIcon="true" :rIcon="true" />
            <Button size="24" tone="secondary" type="icon-only" :lIcon="true" />
          </div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <div style="font-size: 12px; color: #666; font-family: monospace;">Size 32</div>
          <div style="display: flex; gap: 12px; align-items: center;">
            <Button size="32" tone="primary" label="Button" :lIcon="true" :rIcon="true" />
            <Button size="32" tone="secondary" type="icon-only" :lIcon="true" />
          </div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <div style="font-size: 12px; color: #666; font-family: monospace;">Size 36</div>
          <div style="display: flex; gap: 12px; align-items: center;">
            <Button size="36" tone="primary" label="Button" :lIcon="true" :rIcon="true" />
            <Button size="36" tone="secondary" type="icon-only" :lIcon="true" />
          </div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <div style="font-size: 12px; color: #666; font-family: monospace;">Size 40</div>
          <div style="display: flex; gap: 12px; align-items: center;">
            <Button size="40" tone="primary" label="Button" :lIcon="true" :rIcon="true" />
            <Button size="40" tone="secondary" type="icon-only" :lIcon="true" />
          </div>
        </div>
      </div>
    `
  })
}
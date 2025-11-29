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

| Size | Height | Padding X (L/R) | Padding Y (T/B) | Font Size | Icon Size | Gap | Border Radius | KBD Size |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **24** | 24px | 6px | 6px | 12px (SemiBold) | 12px | 2px | 12px | S-16 |
| **28** | 28px | 8px | 6px | 12px (SemiBold) | 16px | 2px | 12px | S-16 |
| **32** | 32px | 8px | 8px | 12px (SemiBold) | 20px | 2px | 12px | S-16 |
| **36** | 36px | 8px | 10px | 14px (SemiBold) | 20px | 2px | 12px | S-16 |
| **40** | 40px | 12px | 10px | 16px (SemiBold) | 20px | 4px | 12px | S-16 |
`
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label text'
    },
    lIcon: {
      control: 'boolean',
      description: 'Show left icon'
    },
    rIcon: {
      control: 'boolean',
      description: 'Show right icon'
    },
    lIconName: {
      control: 'text',
      description: 'Left icon name (Font Awesome class)'
    },
    rIconName: {
      control: 'text',
      description: 'Right icon name (Font Awesome class)'
    },
    kbd: {
      control: 'boolean',
      description: 'Show keyboard shortcut indicator'
    },
    kbdValue: {
      control: { type: 'select' },
      options: ['1', '2', '3'],
      description: 'Number of keys in keyboard shortcut (1, 2, or 3)'
    },
    kbdCombined: {
      control: 'boolean',
      description: 'Show connector between keys (for 2 or 3 keys)'
    },
    kbdIcon1: { control: 'text' },
    kbdIcon2: { control: 'text' },
    kbdIcon3: { control: 'text' },
    kbdModeIcon1: { 
      control: 'boolean',
      description: 'Toggle icon mode for key 1 (True: Auto/Icon, False: Text)'
    },
    kbdModeIcon2: { 
      control: 'boolean',
      description: 'Toggle icon mode for key 2 (True: Auto/Icon, False: Text)'
    },
    kbdModeIcon3: { 
      control: 'boolean',
      description: 'Toggle icon mode for key 3 (True: Auto/Icon, False: Text)'
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
      options: ['24', '28', '32', '36', '40'],
      description: 'Button size'
    }
  },
  args: {
    label: 'Button',
    lIcon: true,
    rIcon: true,
    kbd: false,
    kbdModeIcon1: true,
    kbdModeIcon2: true,
    kbdModeIcon3: true,
    successMessage: 'Success',
    type: 'default',
    tone: 'primary',
    state: 'default',
    size: '24'
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
      const state = ref<'default' | 'hover' | 'press' | 'loading' | 'success'>('default')
      let loadingTimeout: ReturnType<typeof setTimeout> | null = null
      let successTimeout: ReturnType<typeof setTimeout> | null = null
      
      const handleMouseEnter = () => {
        if (state.value === 'default' || state.value === 'hover') {
          state.value = 'hover'
        }
      }
      
      const handleMouseLeave = () => {
        if (state.value === 'hover') {
          state.value = 'default'
        }
      }
      
      const handleMouseDown = () => {
        if (state.value === 'hover' || state.value === 'default') {
          state.value = 'press'
        }
      }
      
      const handleMouseUp = () => {
        if (state.value === 'press') {
          // Clear any existing timeouts
          if (loadingTimeout) clearTimeout(loadingTimeout)
          if (successTimeout) clearTimeout(successTimeout)
          
          // Transition to loading
          state.value = 'loading'
          
          // After 1.5 seconds, transition to success
          loadingTimeout = setTimeout(() => {
            state.value = 'success'
            
            // After 2 seconds, reset to default
            successTimeout = setTimeout(() => {
              state.value = 'default'
            }, 2000)
          }, 1500)
        }
      }
      
      // Cleanup on unmount
      onUnmounted(() => {
        if (loadingTimeout) clearTimeout(loadingTimeout)
        if (successTimeout) clearTimeout(successTimeout)
      })
      
      return { 
        state,
        handleMouseEnter,
        handleMouseLeave,
        handleMouseDown,
        handleMouseUp
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; align-items: flex-start;">
        <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
          <div
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
            @mousedown="handleMouseDown"
            @mouseup="handleMouseUp"
            style="display: inline-block; cursor: pointer;"
          >
            <Button 
              tone="primary" 
              label="Button" 
              :state="state"
              successMessage="Success"
              :lIcon="true"
              :rIcon="true"
            />
          </div>
        </div>
        <div style="font-size: 12px; color: #666;">
          Current state: <strong>{{ state }}</strong>
          <br />
          <span style="font-size: 11px; color: #999; margin-top: 4px; display: block;">
            Hover to see hover state • Click to see press → loading → success
          </span>
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
          <div style="font-size: 12px; color: #666; font-family: monospace;">Size 28</div>
          <div style="display: flex; gap: 12px; align-items: center;">
            <Button size="28" tone="primary" label="Button" :lIcon="true" :rIcon="true" />
            <Button size="28" tone="secondary" type="icon-only" :lIcon="true" />
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
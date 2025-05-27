import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import IconColorPicker from '../components/IconColorPicker.vue'

const meta: Meta<typeof IconColorPicker> = {
  title: 'Components/IconColorPicker',
  component: IconColorPicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive icon and color picker component with search functionality, based on FontAwesome 6 Pro icons. Features a searchable grid of icons, predefined color palette, and custom color input with hex values.'
      }
    }
  },
  argTypes: {
    modelValue: {
      description: 'The selected icon and color value',
      control: { type: 'object' }
    },
    disabled: {
      description: 'Disable the entire picker',
      control: { type: 'boolean' }
    },
    'onUpdate:modelValue': {
      description: 'Emitted when the selected icon/color combination changes',
      action: 'update:modelValue'
    },
    'onIcon-selected': {
      description: 'Emitted when an icon is selected',
      action: 'icon-selected'
    },
    'onColor-selected': {
      description: 'Emitted when a color is selected',
      action: 'color-selected'
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
  args: {
    modelValue: null,
    disabled: false
  },
  render: (args) => ({
    components: { IconColorPicker },
    setup() {
      const modelValue = ref(args.modelValue)
      return { args, modelValue }
    },
    template: `
      <IconColorPicker 
        v-model="modelValue"
        :disabled="args.disabled"
        @update:modelValue="args['onUpdate:modelValue']"
        @icon-selected="args['onIcon-selected']"
        @color-selected="args['onColor-selected']"
      />
    `
  })
}

// With pre-selected icon and color
export const WithSelection: Story = {
  args: {
    modelValue: { icon: 'heart', color: '#E42E2E' },
    disabled: false
  },
  render: (args) => ({
    components: { IconColorPicker },
    setup() {
      const modelValue = ref(args.modelValue)
      return { args, modelValue }
    },
    template: `
      <IconColorPicker 
        v-model="modelValue"
        :disabled="args.disabled"
        @update:modelValue="args['onUpdate:modelValue']"
        @icon-selected="args['onIcon-selected']"
        @color-selected="args['onColor-selected']"
      />
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'IconColorPicker with a pre-selected heart icon and red color from the palette.'
      }
    }
  }
}

// Custom color selection
export const CustomColor: Story = {
  args: {
    modelValue: { icon: 'wand-magic-sparkles', color: '#9B74B7' },
    disabled: false
  },
  render: (args) => ({
    components: { IconColorPicker },
    setup() {
      const modelValue = ref(args.modelValue)
      return { args, modelValue }
    },
    template: `
      <IconColorPicker 
        v-model="modelValue"
        :disabled="args.disabled"
        @update:modelValue="args['onUpdate:modelValue']"
        @icon-selected="args['onIcon-selected']"
        @color-selected="args['onColor-selected']"
      />
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'IconColorPicker with a magic wand icon and custom purple color entered via hex input.'
      }
    }
  }
}

// Disabled state
export const Disabled: Story = {
  args: {
    modelValue: { icon: 'gear', color: '#476887' },
    disabled: true
  },
  render: (args) => ({
    components: { IconColorPicker },
    setup() {
      const modelValue = ref(args.modelValue)
      return { args, modelValue }
    },
    template: `
      <IconColorPicker 
        v-model="modelValue"
        :disabled="args.disabled"
        @update:modelValue="args['onUpdate:modelValue']"
        @icon-selected="args['onIcon-selected']"
        @color-selected="args['onColor-selected']"
      />
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'IconColorPicker in disabled state. All interactions are prevented.'
      }
    }
  }
}

// Interactive playground
export const Playground: Story = {
  args: {
    modelValue: null,
    disabled: false
  },
  render: (args) => ({
    components: { IconColorPicker },
    setup() {
      const modelValue = ref(args.modelValue)
      const selectedData = ref<{ icon: string; color: string } | null>(null)
      
      const handleUpdate = (value: { icon: string; color: string } | null) => {
        modelValue.value = value
        selectedData.value = value
        args['onUpdate:modelValue']?.(value)
      }
      
      return { 
        args, 
        modelValue, 
        selectedData,
        handleUpdate
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px; align-items: center;">
        <IconColorPicker 
          v-model="modelValue"
          :disabled="args.disabled"
          @update:modelValue="handleUpdate"
          @icon-selected="args['onIcon-selected']"
          @color-selected="args['onColor-selected']"
        />
        
        <div v-if="selectedData" style="
          display: flex; 
          align-items: center; 
          gap: 12px; 
          padding: 12px 16px; 
          background: #f8f9fa; 
          border-radius: 8px;
          border: 1px solid #e9ecef;
          font-family: 'Inter', sans-serif;
        ">
          <div style="display: flex; align-items: center; gap: 8px;">
            <i :class="'fa-solid fa-' + selectedData.icon" :style="{ color: selectedData.color, fontSize: '20px' }"></i>
            <span style="font-weight: 500; color: #495057;">{{ selectedData.icon }}</span>
          </div>
          <div style="
            width: 24px; 
            height: 24px; 
            border-radius: 50%; 
            border: 2px solid #fff;
            box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
          " :style="{ backgroundColor: selectedData.color }"></div>
          <code style="
            background: #e9ecef; 
            padding: 2px 6px; 
            border-radius: 4px; 
            font-size: 12px;
            color: #495057;
          ">{{ selectedData.color }}</code>
        </div>
      </div>
    `
  }),
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground showing the selected icon and color in real-time. Try searching for icons, clicking different icons, selecting colors from the palette, or entering custom hex values.'
      }
    }
  }
}

// Design system showcase
export const DesignShowcase: Story = {
  render: () => ({
    components: { IconColorPicker },
    setup() {
      const examples = ref([
        { icon: 'house', color: '#476887', label: 'Home' },
        { icon: 'user', color: '#2CDE6D', label: 'User' },
        { icon: 'heart', color: '#E42E2E', label: 'Favorite' },
        { icon: 'star', color: '#E3B212', label: 'Rating' },
        { icon: 'bell', color: '#0072E5', label: 'Notification' }
      ])
      
      return { examples }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <h3 style="margin: 0; font-family: 'Inter', sans-serif; color: #212529;">Icon & Color Combinations</h3>
        
        <div style="display: flex; flex-wrap: wrap; gap: 16px;">
          <div 
            v-for="example in examples" 
            :key="example.icon"
            style="
              display: flex; 
              flex-direction: column; 
              align-items: center; 
              gap: 8px;
              padding: 16px;
              background: #ffffff;
              border: 1px solid #e9ecef;
              border-radius: 8px;
              min-width: 80px;
            "
          >
            <i 
              :class="'fa-solid fa-' + example.icon" 
              :style="{ color: example.color, fontSize: '24px' }"
            ></i>
            <span style="font-size: 12px; color: #6c757d; font-family: 'Inter', sans-serif;">
              {{ example.label }}
            </span>
            <code style="
              font-size: 10px; 
              background: #f8f9fa; 
              padding: 2px 4px; 
              border-radius: 3px;
              color: #495057;
            ">
              {{ example.color }}
            </code>
          </div>
        </div>
        
        <div style="margin-top: 20px;">
          <IconColorPicker />
        </div>
      </div>
    `
  }),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Design system showcase demonstrating various icon and color combinations that can be created with the IconColorPicker component.'
      }
    }
  }
} 
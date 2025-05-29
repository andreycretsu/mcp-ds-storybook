import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import ColorSwatch from '../components/ColorSwatch.vue'

const meta: Meta<typeof ColorSwatch> = {
  title: 'Atomic Components/ColorSwatch',
  component: ColorSwatch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A reusable color swatch component with selection states, hover effects, and keyboard accessibility. Available in multiple sizes.'
      }
    }
  },
  argTypes: {
    color: {
      description: 'The color value to display',
      control: { type: 'color' }
    },
    isSelected: {
      description: 'Whether this color swatch is currently selected',
      control: { type: 'boolean' }
    },
    size: {
      description: 'Size variant of the color swatch',
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: '#476887',
    isSelected: false,
    size: 'medium'
  },
  render: (args) => ({
    components: { ColorSwatch },
    setup() {
      const handleColorSelected = (color: string) => {
        console.log('Color selected:', color)
      }
      return { args, handleColorSelected }
    },
    template: `
      <ColorSwatch 
        :color="args.color"
        :is-selected="args.isSelected"
        :size="args.size"
        @color-selected="handleColorSelected"
      />
    `
  })
}

export const Selected: Story = {
  args: {
    color: '#2cde6d',
    isSelected: true,
    size: 'medium'
  },
  render: (args) => ({
    components: { ColorSwatch },
    setup() {
      const handleColorSelected = (color: string) => {
        console.log('Color selected:', color)
      }
      return { args, handleColorSelected }
    },
    template: `
      <ColorSwatch 
        :color="args.color"
        :is-selected="args.isSelected"
        :size="args.size"
        @color-selected="handleColorSelected"
      />
    `
  })
}

export const AllSizes: Story = {
  render: () => ({
    components: { ColorSwatch },
    setup() {
      const colors = ['#e42e2e', '#ff8c00', '#2cde6d', '#476887', '#9b74b7']
      const handleColorSelected = (color: string) => {
        console.log('Color selected:', color)
      }
      return { colors, handleColorSelected }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
        <div style="display: flex; gap: 8px; align-items: center;">
          <span style="font-size: 12px; width: 60px;">Small:</span>
          <ColorSwatch 
            v-for="color in colors"
            :key="'small-' + color"
            :color="color"
            size="small"
            @color-selected="handleColorSelected"
          />
        </div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <span style="font-size: 12px; width: 60px;">Medium:</span>
          <ColorSwatch 
            v-for="color in colors"
            :key="'medium-' + color"
            :color="color"
            size="medium"
            @color-selected="handleColorSelected"
          />
        </div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <span style="font-size: 12px; width: 60px;">Large:</span>
          <ColorSwatch 
            v-for="color in colors"
            :key="'large-' + color"
            :color="color"
            size="large"
            @color-selected="handleColorSelected"
          />
        </div>
      </div>
    `
  })
}

export const InteractiveDemo: Story = {
  render: () => ({
    components: { ColorSwatch },
    setup() {
      const colors = ['#e42e2e', '#ff8c00', '#ffeb3b', '#2cde6d', '#00bcd4', '#476887', '#9b74b7']
      const selectedColor = ref('#476887')
      
      const handleColorSelected = (color: string) => {
        selectedColor.value = color
      }
      
      return { colors, selectedColor, handleColorSelected }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
        <p style="font-size: 14px; margin: 0;">Selected: {{ selectedColor }}</p>
        <div style="display: flex; gap: 4px;">
          <ColorSwatch 
            v-for="color in colors"
            :key="color"
            :color="color"
            :is-selected="selectedColor === color"
            @color-selected="handleColorSelected"
          />
        </div>
      </div>
    `
  })
} 
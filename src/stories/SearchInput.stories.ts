import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import SearchInput from '../components/SearchInput.vue'

const meta: Meta<typeof SearchInput> = {
  title: 'Atomic Components/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A reusable search input component with magnifying glass icon. Designed for filtering and search functionality across the design system.'
      }
    }
  },
  argTypes: {
    modelValue: {
      description: 'The current search query value',
      control: { type: 'text' }
    },
    placeholder: {
      description: 'Placeholder text shown when input is empty',
      control: { type: 'text' }
    },
    disabled: {
      description: 'Whether the input is disabled',
      control: { type: 'boolean' }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    modelValue: '',
    placeholder: 'Search',
    disabled: false
  },
  render: (args) => ({
    components: { SearchInput },
    setup() {
      const searchValue = ref(args.modelValue)
      return { args, searchValue }
    },
    template: `
      <div style="width: 300px;">
        <SearchInput 
          v-model="searchValue"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
        />
        <p style="margin-top: 12px; font-size: 12px; color: #666;">
          Current value: "{{ searchValue }}"
        </p>
      </div>
    `
  })
}

export const WithValue: Story = {
  args: {
    modelValue: 'icons',
    placeholder: 'Search',
    disabled: false
  },
  render: (args) => ({
    components: { SearchInput },
    setup() {
      const searchValue = ref(args.modelValue)
      return { args, searchValue }
    },
    template: `
      <div style="width: 300px;">
        <SearchInput 
          v-model="searchValue"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
        />
      </div>
    `
  })
}

export const Disabled: Story = {
  args: {
    modelValue: '',
    placeholder: 'Search disabled',
    disabled: true
  },
  render: (args) => ({
    components: { SearchInput },
    setup() {
      const searchValue = ref(args.modelValue)
      return { args, searchValue }
    },
    template: `
      <div style="width: 300px;">
        <SearchInput 
          v-model="searchValue"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
        />
      </div>
    `
  })
}

export const CustomPlaceholder: Story = {
  args: {
    modelValue: '',
    placeholder: 'Find components...',
    disabled: false
  },
  render: (args) => ({
    components: { SearchInput },
    setup() {
      const searchValue = ref(args.modelValue)
      return { args, searchValue }
    },
    template: `
      <div style="width: 300px;">
        <SearchInput 
          v-model="searchValue"
          :placeholder="args.placeholder"
          :disabled="args.disabled"
        />
      </div>
    `
  })
} 
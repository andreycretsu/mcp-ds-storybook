import type { Meta, StoryObj } from '@storybook/vue3'
import SegmentedControl from '../components/SegmentedControl.vue'

const meta: Meta<typeof SegmentedControl> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A versatile segmented control component with dropdown functionality. Supports multiple segments, active/inactive states, and dropdown menus for filtering and selection.'
      }
    }
  },
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'Currently selected segment value'
    },
    items: {
      control: 'object',
      description: 'Array of segment items with optional dropdown options'
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

// Basic 3-segment control
export const Default: Story = {
  args: {
    modelValue: 'company',
    items: [
      { label: 'Company', value: 'company' },
      { label: 'Direct reports', value: 'direct-reports' },
      { label: 'My', value: 'my' }
    ]
  }
}

// 3-segment control with dropdown
export const WithDropdown: Story = {
  args: {
    modelValue: 'company',
    items: [
      { label: 'Company', value: 'company' },
      { 
        label: 'Direct reports', 
        value: 'direct-reports',
        dropdown: true,
        dropdownOptions: [
          { label: 'Direct reports', value: 'direct-reports' },
          { label: 'Indirect reports', value: 'indirect-reports' },
          { label: 'All reports', value: 'all-reports' }
        ]
      },
      { label: 'My', value: 'my' }
    ]
  }
}

// 2-segment control
export const TwoSegments: Story = {
  args: {
    modelValue: 'company',
    items: [
      { label: 'Company', value: 'company' },
      { label: 'My', value: 'my' }
    ]
  }
}

// 2-segment control with dropdown
export const TwoSegmentsWithDropdown: Story = {
  args: {
    modelValue: 'direct-reports',
    items: [
      { 
        label: 'Direct reports', 
        value: 'direct-reports',
        dropdown: true,
        dropdownOptions: [
          { label: 'Direct reports', value: 'direct-reports' },
          { label: 'Indirect reports', value: 'indirect-reports' },
          { label: 'All reports', value: 'all-reports' }
        ]
      },
      { label: 'My', value: 'my' }
    ]
  }
}



// All variations showcase
export const AllVariations: Story = {
  render: () => ({
    components: { SegmentedControl },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
        <div>
          <h3 style="margin-bottom: 12px; color: #374151;">3 Segments - Default</h3>
          <SegmentedControl 
            v-model="value1"
            :items="items1"
          />
        </div>
        
        <div>
          <h3 style="margin-bottom: 12px; color: #374151;">3 Segments with Dropdown</h3>
          <SegmentedControl 
            v-model="value2"
            :items="items2"
          />
        </div>
        
        <div>
          <h3 style="margin-bottom: 12px; color: #374151;">2 Segments</h3>
          <SegmentedControl 
            v-model="value3"
            :items="items3"
          />
        </div>
        
        <div>
          <h3 style="margin-bottom: 12px; color: #374151;">2 Segments with Dropdown</h3>
          <SegmentedControl 
            v-model="value4"
            :items="items4"
          />
        </div>
      </div>
    `,
    data() {
      return {
        value1: 'company',
        value2: 'company',
        value3: 'company',
        value4: 'direct-reports',
        items1: [
          { label: 'Company', value: 'company' },
          { label: 'Direct reports', value: 'direct-reports' },
          { label: 'My', value: 'my' }
        ],
        items2: [
          { label: 'Company', value: 'company' },
          { 
            label: 'Direct reports', 
            value: 'direct-reports',
            dropdown: true,
            dropdownOptions: [
              { label: 'Direct reports', value: 'direct-reports' },
              { label: 'Indirect reports', value: 'indirect-reports' },
              { label: 'All reports', value: 'all-reports' }
            ]
          },
          { label: 'My', value: 'my' }
        ],
        items3: [
          { label: 'Company', value: 'company' },
          { label: 'My', value: 'my' }
        ],
        items4: [
          { 
            label: 'Direct reports', 
            value: 'direct-reports',
            dropdown: true,
            dropdownOptions: [
              { label: 'Direct reports', value: 'direct-reports' },
              { label: 'Indirect reports', value: 'indirect-reports' },
              { label: 'All reports', value: 'all-reports' }
            ]
          },
          { label: 'My', value: 'my' }
        ]
      }
    }
  })
}

// Simple test story
export const SimpleTest: Story = {
  render: () => ({
    components: { SegmentedControl },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 500px;">
        <div>
          <h3 style="margin-bottom: 12px; color: #374151;">Simple Test - Click to see active state</h3>
          <SegmentedControl 
            v-model="selectedValue"
            :items="items"
            @update:modelValue="handleValueChange"
          />
        </div>
        
        <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
          <h4 style="margin-bottom: 8px; color: #374151;">Current State:</h4>
          <p style="margin: 4px 0; color: #64748b;">Selected: <strong>{{ selectedValue }}</strong></p>
        </div>
      </div>
    `,
    data() {
      return {
        selectedValue: 'company',
        items: [
          { label: 'Company', value: 'company' },
          { label: 'My', value: 'my' }
        ]
      }
    },
    methods: {
      handleValueChange(value: string) {
        console.log('Value changed to:', value)
        this.selectedValue = value
      }
    }
  })
}

// Interactive demo
export const InteractiveDemo: Story = {
  render: () => ({
    components: { SegmentedControl },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 500px;">
        <div>
          <h3 style="margin-bottom: 12px; color: #374151;">Interactive Segmented Control</h3>
          <SegmentedControl 
            v-model="selectedValue"
            :items="items"
            @dropdown-change="handleDropdownChange"
          />
        </div>
        
        <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
          <h4 style="margin-bottom: 8px; color: #374151;">Current State:</h4>
          <p style="margin: 4px 0; color: #64748b;">Selected: <strong>{{ selectedValue }}</strong></p>
          <p style="margin: 4px 0; color: #64748b;">Dropdown Value: <strong>{{ dropdownValue }}</strong></p>
        </div>
        

      </div>
    `,
    data() {
      return {
        selectedValue: 'company',
        dropdownValue: '',
        items: [
          { label: 'Company', value: 'company' },
          { 
            label: 'Direct reports', 
            value: 'direct-reports',
            dropdown: true,
            dropdownOptions: [
              { label: 'Direct reports', value: 'direct-reports' },
              { label: 'Indirect reports', value: 'indirect-reports' },
              { label: 'All reports', value: 'all-reports' }
            ]
          },
          { label: 'My', value: 'my' }
        ]
      }
    },
    methods: {
      handleDropdownChange(value: string) {
        this.dropdownValue = value
      }
    }
  })
}

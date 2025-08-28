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
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size variant of the segmented control'
    },
    variant: {
      control: 'select',
      options: ['default', 'outline'],
      description: 'Visual variant of the segmented control'
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
    ],
    size: 'medium',
    variant: 'default'
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
    ],
    size: 'medium',
    variant: 'default'
  }
}

// 2-segment control
export const TwoSegments: Story = {
  args: {
    modelValue: 'company',
    items: [
      { label: 'Company', value: 'company' },
      { label: 'My', value: 'my' }
    ],
    size: 'medium',
    variant: 'default'
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
    ],
    size: 'medium',
    variant: 'default'
  }
}

// Small size
export const Small: Story = {
  args: {
    modelValue: 'company',
    items: [
      { label: 'Company', value: 'company' },
      { label: 'My', value: 'my' }
    ],
    size: 'small',
    variant: 'default'
  }
}

// Large size
export const Large: Story = {
  args: {
    modelValue: 'company',
    items: [
      { label: 'Company', value: 'company' },
      { label: 'My', value: 'my' }
    ],
    size: 'large',
    variant: 'default'
  }
}

// Outline variant
export const Outline: Story = {
  args: {
    modelValue: 'company',
    items: [
      { label: 'Company', value: 'company' },
      { label: 'My', value: 'my' }
    ],
    size: 'medium',
    variant: 'outline'
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
            size="medium"
            variant="default"
          />
        </div>
        
        <div>
          <h3 style="margin-bottom: 12px; color: #374151;">3 Segments with Dropdown</h3>
          <SegmentedControl 
            v-model="value2"
            :items="items2"
            size="medium"
            variant="default"
          />
        </div>
        
        <div>
          <h3 style="margin-bottom: 12px; color: #374151;">2 Segments</h3>
          <SegmentedControl 
            v-model="value3"
            :items="items3"
            size="medium"
            variant="default"
          />
        </div>
        
        <div>
          <h3 style="margin-bottom: 12px; color: #374151;">2 Segments with Dropdown</h3>
          <SegmentedControl 
            v-model="value4"
            :items="items4"
            size="medium"
            variant="default"
          />
        </div>
        
        <div>
          <h3 style="margin-bottom: 12px; color: #374151;">Small Size</h3>
          <SegmentedControl 
            v-model="value5"
            :items="items5"
            size="small"
            variant="default"
          />
        </div>
        
        <div>
          <h3 style="margin-bottom: 12px; color: #374151;">Large Size</h3>
          <SegmentedControl 
            v-model="value6"
            :items="items6"
            size="large"
            variant="default"
          />
        </div>
        
        <div>
          <h3 style="margin-bottom: 12px; color: #374151;">Outline Variant</h3>
          <SegmentedControl 
            v-model="value7"
            :items="items7"
            size="medium"
            variant="outline"
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
        value5: 'company',
        value6: 'company',
        value7: 'company',
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
        ],
        items5: [
          { label: 'Company', value: 'company' },
          { label: 'My', value: 'my' }
        ],
        items6: [
          { label: 'Company', value: 'company' },
          { label: 'My', value: 'my' }
        ],
        items7: [
          { label: 'Company', value: 'company' },
          { label: 'My', value: 'my' }
        ]
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
            :size="size"
            :variant="variant"
            @dropdown-change="handleDropdownChange"
          />
        </div>
        
        <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
          <h4 style="margin-bottom: 8px; color: #374151;">Current State:</h4>
          <p style="margin: 4px 0; color: #64748b;">Selected: <strong>{{ selectedValue }}</strong></p>
          <p style="margin: 4px 0; color: #64748b;">Dropdown Value: <strong>{{ dropdownValue }}</strong></p>
          <p style="margin: 4px 0; color: #64748b;">Size: <strong>{{ size }}</strong></p>
          <p style="margin: 4px 0; color: #64748b;">Variant: <strong>{{ variant }}</strong></p>
        </div>
        
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <button 
            @click="size = 'small'"
            :style="{ 
              padding: '8px 12px', 
              border: '1px solid #d1d5db', 
              borderRadius: '6px', 
              background: size === 'small' ? '#3b82f6' : 'white',
              color: size === 'small' ? 'white' : '#374151',
              cursor: 'pointer'
            }"
          >
            Small
          </button>
          <button 
            @click="size = 'medium'"
            :style="{ 
              padding: '8px 12px', 
              border: '1px solid #d1d5db', 
              borderRadius: '6px', 
              background: size === 'medium' ? '#3b82f6' : 'white',
              color: size === 'medium' ? 'white' : '#374151',
              cursor: 'pointer'
            }"
          >
            Medium
          </button>
          <button 
            @click="size = 'large'"
            :style="{ 
              padding: '8px 12px', 
              border: '1px solid #d1d5db', 
              borderRadius: '6px', 
              background: size === 'large' ? '#3b82f6' : 'white',
              color: size === 'large' ? 'white' : '#374151',
              cursor: 'pointer'
            }"
          >
            Large
          </button>
        </div>
        
        <div style="display: flex; gap: 12px;">
          <button 
            @click="variant = 'default'"
            :style="{ 
              padding: '8px 12px', 
              border: '1px solid #d1d5db', 
              borderRadius: '6px', 
              background: variant === 'default' ? '#3b82f6' : 'white',
              color: variant === 'default' ? 'white' : '#374151',
              cursor: 'pointer'
            }"
          >
            Default
          </button>
          <button 
            @click="variant = 'outline'"
            :style="{ 
              padding: '8px 12px', 
              border: '1px solid #d1d5db', 
              borderRadius: '6px', 
              background: variant === 'outline' ? '#3b82f6' : 'white',
              color: variant === 'outline' ? 'white' : '#374151',
              cursor: 'pointer'
            }"
          >
            Outline
          </button>
        </div>
      </div>
    `,
    data() {
      return {
        selectedValue: 'company',
        dropdownValue: '',
        size: 'medium',
        variant: 'default',
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

import type { Meta, StoryObj } from '@storybook/vue3'
import DatePicker from '../components/DatePicker.vue'

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive date picker with infinite scrolling, quick actions, and calendar navigation.'
      }
    }
  },
  argTypes: {
    startDate: {
      control: 'date',
      description: 'Selected start date'
    },
    endDate: {
      control: 'date',
      description: 'Selected end date'
    },
    searchLabel: {
      control: 'text',
      description: 'Search field label'
    },
    footerText: {
      control: 'text',
      description: 'Footer text'
    },
    minDate: {
      control: 'date',
      description: 'Minimum selectable date'
    },
    maxDate: {
      control: 'date',
      description: 'Maximum selectable date'
    },
    showSidebar: {
      control: 'boolean',
      description: 'Show sidebar with quick actions'
    }
  },
  args: {
    searchLabel: 'When...',
    footerText: '136.0 hours, 28.0 days',
    showSidebar: false,
    startDate: null,
    endDate: null
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    startDate: null,
    endDate: null
  }
}

export const WithSelectedDate: Story = {
  args: {
    startDate: new Date(),
    endDate: null
  }
}

export const WithoutSidebar: Story = {
  args: {
    startDate: null,
    endDate: null,
    showSidebar: false,
    searchLabel: 'Select date...',
    footerText: 'Compact mode'
  }
}

export const CustomLabels: Story = {
  args: {
    searchLabel: 'Select date...',
    footerText: 'Custom footer text',
    startDate: null,
    endDate: null
  }
}

export const DateRange: Story = {
  args: {
    searchLabel: 'Date range...',
    footerText: '7 days selected',
    startDate: new Date(2024, 0, 15),
    endDate: new Date(2024, 0, 22),
    minDate: new Date(2024, 0, 1),
    maxDate: new Date(2024, 11, 31)
  }
}

// Leave Request Demo
export const LeaveRequestDemo: Story = {
  args: {
    searchLabel: 'Leave dates...',
    footerText: '5 working days, 40.0 hours',
    startDate: new Date(2025, 4, 15), // May 15, 2025
    endDate: null
  }
}

// Interactive Demo
export const InteractiveDemo: Story = {
  render: (args) => ({
    components: { DatePicker },
    setup() {
      return { args }
    },
    data() {
      return {
        selectedStartDate: null,
        selectedEndDate: null,
        lastQuickAction: null
      }
    },
    methods: {
      onStartDateUpdate(date: Date | null) {
        this.selectedStartDate = date
        console.log('Start date selected:', date)
      },
      onEndDateUpdate(date: Date | null) {
        this.selectedEndDate = date
        console.log('End date selected:', date)
      },
      onQuickAction(action: string) {
        this.lastQuickAction = action
        console.log('Quick action:', action)
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
        <DatePicker 
          v-bind="args"
          @update:startDate="onStartDateUpdate"
          @update:endDate="onEndDateUpdate"
          @quick-action="onQuickAction"
        />
        
        <div style="display: flex; flex-direction: column; gap: 8px; padding: 16px; background: #f8f9fa; border-radius: 8px; min-width: 300px;">
          <div style="font-size: 14px; font-weight: 600; color: #333;">Status:</div>
          <div style="font-size: 12px; color: #666;">
            Start Date: {{ selectedStartDate ? selectedStartDate.toLocaleDateString() : 'None' }}
          </div>
          <div style="font-size: 12px; color: #666;">
            End Date: {{ selectedEndDate ? selectedEndDate.toLocaleDateString() : 'None' }}
          </div>
          <div style="font-size: 12px; color: #666;">
            Last Quick Action: {{ lastQuickAction || 'None' }}
          </div>
        </div>
      </div>
    `
  }),
  args: {
    searchLabel: 'When...',
    footerText: '136.0 hours, 28.0 days',
    startDate: null,
    endDate: null
  }
}

// Features Showcase
export const FeaturesShowcase: Story = {
  render: () => ({
    components: { DatePicker },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 1200px;">
        <div style="text-align: center;">
          <h2 style="margin: 0 0 8px; font-size: 18px; color: #333;">DatePicker Features</h2>
          <p style="margin: 0; font-size: 14px; color: #666;">
            Infinite scrolling calendar with quick actions and precise Figma styling
          </p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
          <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
            <h3 style="margin: 0; font-size: 14px; color: #333;">With Sidebar</h3>
            <DatePicker searchLabel="When..." footerText="136.0 hours, 28.0 days" :showSidebar="true" />
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
            <h3 style="margin: 0; font-size: 14px; color: #333;">Compact Mode (Default)</h3>
            <DatePicker 
              searchLabel="Select date..." 
              footerText="Compact layout"
              :showSidebar="false"
              :startDate="new Date(2025, 0, 15)"
              :endDate="null"
            />
          </div>
        </div>
        
        <div style="padding: 16px; background: #f8f9fa; border-radius: 8px;">
          <h4 style="margin: 0 0 12px; font-size: 14px; font-weight: 600; color: #333;">Key Features:</h4>
          <ul style="margin: 0; padding-left: 16px; font-size: 12px; color: #666; line-height: 1.5;">
            <li><strong>Infinite Scrolling:</strong> Smooth mouse wheel and touch scrolling through months</li>
            <li><strong>Quick Actions:</strong> Sidebar with predefined date ranges (Today, Tomorrow, This week, etc.)</li>
            <li><strong>Arrow Navigation:</strong> Up/down arrows for month navigation</li>
            <li><strong>Date Selection:</strong> Click to select dates with visual feedback</li>
            <li><strong>Today Indicator:</strong> Current date is highlighted</li>
            <li><strong>Month Context:</strong> Previous/next month dates shown in muted colors</li>
            <li><strong>Figma Accurate:</strong> Exact dimensions, colors, and typography from design</li>
          </ul>
        </div>
      </div>
    `
  })
}

// Date Range Demo
export const DateRangeDemo: Story = {
  render: () => ({
    components: { DatePicker },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
        <div style="text-align: center;">
          <h3 style="margin: 0 0 8px; font-size: 16px; color: #333;">Leave Request Scenario</h3>
          <p style="margin: 0; font-size: 12px; color: #666;">
            Simulating a leave request form with calculated time off
          </p>
        </div>
        
        <DatePicker 
          searchLabel="Select leave dates..."
          footerText="114.21 available days"
          :startDate="new Date(2025, 4, 16)"
          :endDate="null"
        />
        
        <div style="padding: 12px; background: #e8f4f8; border-radius: 6px; max-width: 300px; text-align: center;">
          <div style="font-size: 12px; color: #0066cc; font-weight: 500;">
            💡 Tip: Use mouse wheel to scroll through months infinitely
          </div>
        </div>
      </div>
    `
  })
} 
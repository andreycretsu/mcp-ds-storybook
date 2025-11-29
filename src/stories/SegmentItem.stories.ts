import type { Meta, StoryObj } from '@storybook/vue3'
import SegmentItem from '../components/SegmentItem.vue'

const meta: Meta<typeof SegmentItem> = {
  title: 'Atomic Components/SegmentItem',
  component: SegmentItem,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Individual segment item component with active/inactive states and optional dropdown icon. Matches exact Figma specifications for typography, colors, and spacing.'
      }
    }
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Text label for the segment'
    },
    isActive: {
      control: 'boolean',
      description: 'Whether the segment is in active state'
    },
    hasDropdown: {
      control: 'boolean',
      description: 'Whether to show dropdown icon'
    }
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

// Active state
export const Active: Story = {
  args: {
    label: 'Company',
    isActive: true,
    hasDropdown: false,
    fixedWidth: true
  }
}

// Inactive state
export const Inactive: Story = {
  args: {
    label: 'Company',
    isActive: false,
    hasDropdown: false,
    fixedWidth: true
  }
}

// Active with dropdown
export const ActiveWithDropdown: Story = {
  args: {
    label: 'Direct reports',
    isActive: true,
    hasDropdown: true,
    fixedWidth: false
  },
  render: (args) => ({
    components: { SegmentItem },
    setup() {
      return { args }
    },
    template: `
      <div style="position: relative;">
        <SegmentItem v-bind="args" />
        <div style="position: absolute; top: 100%; left: 0; margin-top: 4px; background: white; border: 1px solid #d3dfeb; border-radius: 4px; box-shadow: 0px 1px 4px 0px rgba(9,8,61,0.08); width: auto; min-width: fit-content; z-index: 1000;">
          <div style="padding: 4px 8px; font-size: 12px; font-weight: 500; color: #476887; cursor: pointer; font-family: 'Inter', sans-serif;">Direct reports</div>
          <div style="padding: 4px 8px; font-size: 12px; font-weight: 500; color: #476887; cursor: pointer; font-family: 'Inter', sans-serif;">Indirect reports</div>
          <div style="padding: 4px 8px; font-size: 12px; font-weight: 500; color: #476887; cursor: pointer; font-family: 'Inter', sans-serif;">All reports</div>
        </div>
      </div>
    `
  })
}

// Inactive with dropdown
export const InactiveWithDropdown: Story = {
  args: {
    label: 'Direct reports',
    isActive: false,
    hasDropdown: true,
    fixedWidth: false
  },
  render: (args) => ({
    components: { SegmentItem },
    setup() {
      return { args }
    },
    template: `
      <div style="position: relative;">
        <SegmentItem v-bind="args" />
        <div style="position: absolute; top: 100%; left: 0; margin-top: 4px; background: white; border: 1px solid #d3dfeb; border-radius: 4px; box-shadow: 0px 1px 4px 0px rgba(9,8,61,0.08); width: auto; min-width: fit-content; z-index: 1000;">
          <div style="padding: 4px 8px; font-size: 12px; font-weight: 500; color: #476887; cursor: pointer; font-family: 'Inter', sans-serif;">Direct reports</div>
          <div style="padding: 4px 8px; font-size: 12px; font-weight: 500; color: #476887; cursor: pointer; font-family: 'Inter', sans-serif;">Indirect reports</div>
          <div style="padding: 4px 8px; font-size: 12px; font-weight: 500; color: #476887; cursor: pointer; font-family: 'Inter', sans-serif;">All reports</div>
        </div>
      </div>
    `
  })
}

// All states showcase
export const AllStates: Story = {
  render: () => ({
    components: { SegmentItem },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
        <div>
          <h3 style="margin-bottom: 8px; color: #374151; font-size: 14px;">Active States</h3>
          <div style="display: flex; gap: 8px;">
            <SegmentItem label="Company" :is-active="true" :has-dropdown="false" :fixed-width="true" />
            <div style="position: relative;">
              <SegmentItem label="Direct reports" :is-active="true" :has-dropdown="true" :fixed-width="false" />
              <div style="position: absolute; top: 100%; left: 0; margin-top: 4px; background: white; border: 1px solid #d3dfeb; border-radius: 4px; box-shadow: 0px 1px 4px 0px rgba(9,8,61,0.08); width: auto; min-width: fit-content; z-index: 1000;">
                <div style="padding: 4px 8px; font-size: 12px; font-weight: 500; color: #476887; cursor: pointer; font-family: 'Inter', sans-serif;">Direct reports</div>
                <div style="padding: 4px 8px; font-size: 12px; font-weight: 500; color: #476887; cursor: pointer; font-family: 'Inter', sans-serif;">Indirect reports</div>
                <div style="padding: 4px 8px; font-size: 12px; font-weight: 500; color: #476887; cursor: pointer; font-family: 'Inter', sans-serif;">All reports</div>
              </div>
            </div>
            <SegmentItem label="My" :is-active="true" :has-dropdown="false" :fixed-width="true" />
          </div>
        </div>
        
        <div>
          <h3 style="margin-bottom: 8px; color: #374151; font-size: 14px;">Inactive States</h3>
          <div style="display: flex; gap: 8px;">
            <SegmentItem label="Company" :is-active="false" :has-dropdown="false" :fixed-width="true" />
            <div style="position: relative;">
              <SegmentItem label="Direct reports" :is-active="false" :has-dropdown="true" :fixed-width="false" />
              <div style="position: absolute; top: 100%; left: 0; margin-top: 4px; background: white; border: 1px solid #d3dfeb; border-radius: 4px; box-shadow: 0px 1px 4px 0px rgba(9,8,61,0.08); width: auto; min-width: fit-content; z-index: 1000;">
                <div style="padding: 4px 8px; font-size: 12px; font-weight: 500; color: #476887; cursor: pointer; font-family: 'Inter', sans-serif;">Direct reports</div>
                <div style="padding: 4px 8px; font-size: 12px; font-weight: 500; color: #476887; cursor: pointer; font-family: 'Inter', sans-serif;">Indirect reports</div>
                <div style="padding: 4px 8px; font-size: 12px; font-weight: 500; color: #476887; cursor: pointer; font-family: 'Inter', sans-serif;">All reports</div>
              </div>
            </div>
            <SegmentItem label="My" :is-active="false" :has-dropdown="false" :fixed-width="true" />
          </div>
        </div>
        
        <div>
          <h3 style="margin-bottom: 8px; color: #374151; font-size: 14px;">Interactive Demo</h3>
          <div style="display: flex; gap: 8px;">
            <SegmentItem 
              label="Company" 
              :is-active="activeSegment === 'company'" 
              :has-dropdown="false"
              @click="activeSegment = 'company'"
            />
            <SegmentItem 
              label="Direct reports" 
              :is-active="activeSegment === 'reports'" 
              :has-dropdown="true"
              @click="activeSegment = 'reports'"
            />
            <SegmentItem 
              label="My" 
              :is-active="activeSegment === 'my'" 
              :has-dropdown="false"
              @click="activeSegment = 'my'"
            />
          </div>
        </div>
      </div>
    `,
    data() {
      return {
        activeSegment: 'company'
      }
    }
  })
}

// Figma specifications showcase
export const FigmaSpecifications: Story = {
  render: () => ({
    components: { SegmentItem },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
        <div style="background: #f8fafc; padding: 16px; border-radius: 8px;">
          <h3 style="margin-bottom: 16px; color: #374151;">Figma Design Specifications</h3>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div>
              <h4 style="margin-bottom: 8px; color: #6b7280; font-size: 12px;">Colors</h4>
              <div style="display: flex; flex-direction: column; gap: 4px; font-size: 12px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                  <div style="width: 16px; height: 16px; background: #000f30; border-radius: 2px;"></div>
                  <span>Active text: #000f30</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <div style="width: 16px; height: 16px; background: #476887; border-radius: 2px;"></div>
                  <span>Inactive text: #476887</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <div style="width: 16px; height: 16px; background: #d3dfeb; border-radius: 2px;"></div>
                  <span>Border: #d3dfeb</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <div style="width: 16px; height: 16px; background: #ffffff; border: 1px solid #d3dfeb; border-radius: 2px;"></div>
                  <span>Active background: #ffffff</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 style="margin-bottom: 8px; color: #6b7280; font-size: 12px;">Typography</h4>
              <div style="display: flex; flex-direction: column; gap: 4px; font-size: 12px;">
                <div>Font: Inter Medium</div>
                <div>Size: 12px</div>
                <div>Weight: 500</div>
                <div>Line height: 1</div>
              </div>
            </div>
          </div>
          
          <div style="margin-top: 16px;">
            <h4 style="margin-bottom: 8px; color: #6b7280; font-size: 12px;">Spacing & Layout</h4>
            <div style="display: flex; flex-direction: column; gap: 4px; font-size: 12px;">
              <div>Padding: 4px 8px (var(--padding-padding_2xs_4px))</div>
              <div>Border radius: 4px</div>
              <div>Shadow: 0px 1px 4px 0px rgba(9,8,61,0.08)</div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 style="margin-bottom: 12px; color: #374151;">Live Component Examples</h3>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="display: flex; gap: 8px;">
              <SegmentItem label="Company" :is-active="true" :has-dropdown="false" :fixed-width="true" />
              <div style="position: relative;">
                <SegmentItem label="Direct reports" :is-active="false" :has-dropdown="true" :fixed-width="false" />
                <div style="position: absolute; top: 100%; left: 0; margin-top: 4px; background: white; border: 1px solid #d3dfeb; border-radius: 4px; box-shadow: 0px 1px 4px 0px rgba(9,8,61,0.08); width: auto; min-width: fit-content; z-index: 1000;">
                  <div style="padding: 4px 8px; font-size: 12px; font-weight: 500; color: #476887; cursor: pointer; font-family: 'Inter', sans-serif;">Direct reports</div>
                  <div style="padding: 4px 8px; font-size: 12px; font-weight: 500; color: #476887; cursor: pointer; font-family: 'Inter', sans-serif;">Indirect reports</div>
                  <div style="padding: 4px 8px; font-size: 12px; font-weight: 500; color: #476887; cursor: pointer; font-family: 'Inter', sans-serif;">All reports</div>
                </div>
              </div>
              <SegmentItem label="My" :is-active="false" :has-dropdown="false" :fixed-width="true" />
            </div>
            <div style="display: flex; gap: 8px;">
              <SegmentItem label="Company" :is-active="false" :has-dropdown="false" :fixed-width="true" />
              <div style="position: relative;">
                <SegmentItem label="Direct reports" :is-active="true" :has-dropdown="true" :fixed-width="false" />
                <div style="position: absolute; top: 100%; left: 0; margin-top: 4px; background: white; border: 1px solid #d3dfeb; border-radius: 4px; box-shadow: 0px 1px 4px 0px rgba(9,8,61,0.08); width: auto; min-width: fit-content; z-index: 1000;">
                  <div style="padding: 4px 8px; font-size: 12px; font-weight: 500; color: #476887; cursor: pointer; font-family: 'Inter', sans-serif;">Direct reports</div>
                  <div style="padding: 4px 8px; font-size: 12px; font-weight: 500; color: #476887; cursor: pointer; font-family: 'Inter', sans-serif;">Indirect reports</div>
                  <div style="padding: 4px 8px; font-size: 12px; font-weight: 500; color: #476887; cursor: pointer; font-family: 'Inter', sans-serif;">All reports</div>
                </div>
              </div>
              <SegmentItem label="My" :is-active="false" :has-dropdown="false" :fixed-width="true" />
            </div>
            <div style="display: flex; gap: 8px;">
              <SegmentItem label="Company" :is-active="false" :has-dropdown="false" :fixed-width="true" />
              <div style="position: relative;">
                <SegmentItem label="Direct reports" :is-active="false" :has-dropdown="true" :fixed-width="false" />
                <div style="position: absolute; top: 100%; left: 0; margin-top: 4px; background: white; border: 1px solid #d3dfeb; border-radius: 4px; box-shadow: 0px 1px 4px 0px rgba(9,8,61,0.08); width: auto; min-width: fit-content; z-index: 1000;">
                  <div style="padding: 4px 8px; font-size: 12px; font-weight: 500; color: #476887; cursor: pointer; font-family: 'Inter', sans-serif;">Direct reports</div>
                  <div style="padding: 4px 8px; font-size: 12px; font-weight: 500; color: #476887; cursor: pointer; font-family: 'Inter', sans-serif;">Indirect reports</div>
                  <div style="padding: 4px 8px; font-size: 12px; font-weight: 500; color: #476887; cursor: pointer; font-family: 'Inter', sans-serif;">All reports</div>
                </div>
              </div>
              <SegmentItem label="My" :is-active="true" :has-dropdown="false" :fixed-width="true" />
            </div>
          </div>
        </div>
      </div>
    `
  })
}

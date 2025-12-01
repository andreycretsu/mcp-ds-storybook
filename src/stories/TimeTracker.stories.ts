import type { Meta, StoryObj } from '@storybook/vue3';
import TimeTracker from '../components/TimeTracker.vue';
import { onMounted } from 'vue';

const meta: Meta<typeof TimeTracker> = {
  title: 'Components/TimeTracker',
  component: TimeTracker,
  tags: ['autodocs'],
  argTypes: {
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 800,
      },
    },
    viewport: {
      defaultViewport: 'responsive',
    },
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: { TimeTracker },
    setup() {
      onMounted(() => {
        try {
          if (window.parent && window.parent.document) {
            const styleId = 'force-docs-width';
            if (!window.parent.document.getElementById(styleId)) {
              const style = window.parent.document.createElement('style');
              style.id = styleId;
              style.innerHTML = `
                .sbdocs-wrapper {
                  max-width: none !important;
                  width: 1200px !important;
                  margin: 0 auto !important;
                }
                .sbdocs-content {
                  max-width: none !important;
                  width: 100% !important;
                }
              `;
              window.parent.document.head.appendChild(style);
            }
          }
        } catch (e) {
          console.warn('Could not inject styles into parent', e);
        }
      });
    },
    template: `
      <div style="display: flex; width: 100%; height: 800px; background: #f0f2f5; font-family: sans-serif; overflow: hidden; position: relative;">
        <!-- Mock Sidebar -->
        <div style="width: 240px; background: #1e293b; color: white; padding: 24px; display: flex; flex-direction: column; gap: 16px; z-index: 0;">
          <div style="font-weight: bold; font-size: 20px; margin-bottom: 24px;">Acme App</div>
          <div style="padding: 8px 12px; background: rgba(255,255,255,0.1); border-radius: 8px;">Dashboard</div>
          <div style="padding: 8px 12px; opacity: 0.7;">Projects</div>
          <div style="padding: 8px 12px; opacity: 0.7;">Tasks</div>
          <div style="padding: 8px 12px; opacity: 0.7;">Reports</div>
        </div>
        
        <!-- Mock Main Content -->
        <div style="flex: 1; display: flex; flex-direction: column; z-index: 0;">
          <!-- Mock Header -->
          <div style="height: 64px; background: white; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; padding: 0 24px; justify-content: space-between;">
            <div style="font-weight: 600;">Dashboard</div>
            <div style="width: 32px; height: 32px; background: #cbd5e1; border-radius: 50%;"></div>
          </div>
          
          <!-- Mock Page Content -->
          <div style="flex: 1; padding: 32px; position: relative;">
             <div style="margin-bottom: 24px; height: 200px; background: white; border-radius: 12px; border: 1px solid #e2e8f0;"></div>
             <div style="display: flex; gap: 24px;">
               <div style="flex: 1; height: 300px; background: white; border-radius: 12px; border: 1px solid #e2e8f0;"></div>
               <div style="flex: 1; height: 300px; background: white; border-radius: 12px; border: 1px solid #e2e8f0;"></div>
             </div>
             
             <!-- TimeTracker injected here, free floating -->
             <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 100;">
                <TimeTracker />
             </div>
          </div>
        </div>
      </div>
    `,
  }),
};

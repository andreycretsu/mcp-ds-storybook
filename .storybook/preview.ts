import type { Preview } from '@storybook/vue3'
import '../src/style.css'
import '@fortawesome/fontawesome-pro/css/all.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'custom',
      values: [
        {
          name: 'custom',
          value: '#F1F5F8',
        },
        {
          name: 'white',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#333333',
        },
      ],
    },
  },
};

export default preview;
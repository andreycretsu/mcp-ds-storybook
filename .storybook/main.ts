import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test"
  ],
  "framework": {
    "name": "@storybook/vue3-vite",
    "options": {}
  },
  docs: {
    autodocs: "tag",
  },
  core: {
    disableTelemetry: true,
  },
  managerHead: (head) => `
    ${head}
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  `,
  viteFinal: async (config) => {
    return {
      ...config,
      server: {
        ...config.server,
        port: 6006,
        host: 'localhost',
        strictPort: true,
      },
    };
  },
};
export default config;
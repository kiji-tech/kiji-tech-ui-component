/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const path = require('path');

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
    docs: {
        autodocs: "tag",
    },
    webpackFinal: async (config, { configType }) => {
        // SCSSファイルの処理を追加
        config.module.rules.push({
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        });    
        return config;
      },
    
};
export default config;

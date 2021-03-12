const path = require('path');

module.exports = {
  stories: [
  "../src/**/*.stories.mdx",
  "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
  "@storybook/addon-links",
  "@storybook/addon-essentials",
  "storybook-addon-material-ui"
  ],
  webpackFinal: (config) => {
    config.resolve.alias['~'] = path.join(__dirname, '../src/');
    return config;
  },
};
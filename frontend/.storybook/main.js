const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register",
    "@storybook/addon-viewport/register",
    "@storybook/addon-backgrounds/register"
  ],
  presets: [path.resolve(__dirname, "./next-preset.js")]
};

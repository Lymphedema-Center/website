const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.(tsx|mdx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register",
    "@storybook/addon-viewport/register",
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-links/register",
    "@storybook/addon-docs"
  ],
  presets: [path.resolve(__dirname, "./next-preset.js")]
};

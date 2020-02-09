const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.(tsx|mdx)"],
  addons: [
    "@storybook/addon-knobs/register",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-viewport/register",
    "@storybook/addon-backgrounds/register",
    "@storybook/addon-links/register",
    "@storybook/addon-docs",
    "@storybook/addon-a11y/register"
  ],
  presets: [
    path.resolve(__dirname, "./next-preset.js"),
    path.resolve(__dirname, "./css-preset.js")
  ]
};

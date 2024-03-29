const path = require("path");

module.exports = {
  mode: "development",
  // make sure the source maps work
  devtool: "eval-source-map",
  // webpack will transpile TS and JS files
  resolve: {
    extensions: [".tsx", ".js", ".css"]
  },
  module: {
    rules: [
      {
        // every time webpack sees a TS file (except for node_modules)
        // webpack will use "ts-loader" to transpile it to JavaScript
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/, /stories/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["next/babel"],
              plugins: [["babel-plugin-styled-components", { ssr: false }]]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true
            }
          }
        ]
      }
    ]
  }
};

const path = require('path');
const webpack = require('webpack');

module.exports = {
  target: "web",
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer:{
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    open: true,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        //  sass
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
      },
      ],
    },
};
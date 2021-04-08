const path = require('path');
const HWP = require('html-webpack-plugin');
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  loader:{

  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HWP(),
    new HotModuleReplacementPlugin(),
  ],
  devServer:{
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  }
};
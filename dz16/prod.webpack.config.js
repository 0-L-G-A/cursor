const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    loader:{

    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    plugins: [
        new HtmlWebpackPlugin (),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
          patterns: [
            { 
              from: path.resolve(__dirname, "src", "assets/img"),
              to: path.resolve(__dirname, "dist", "assets/img"),
            }
          ],
        }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'assets/img',
              },
            },
          ],
        }    
      ],
      
    },
  };
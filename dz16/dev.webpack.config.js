const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HotModuleReplacementPlugin = require('webpack').HotModuleReplacementPlugin;
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    loader:{

    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true
    },
    plugins: [
        new HtmlWebpackPlugin (),
        new HotModuleReplacementPlugin ({
          title: 'My App',
          filename: './src/index.html'
        }),
        new CopyPlugin({
          patterns: [
            { 
              from: path.resolve(__dirname, "src", "assets/img"),
              to: path.resolve(__dirname, "dist", "assets/img"),
            }
          ],
        }),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.html$/i,
          use: {
            loader: 'html-loader',
            options: {
              attrs: [':assets/img']
            }
          }
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
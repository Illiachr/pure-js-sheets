const copyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: ['@babel/polyfill','./index.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@core': path.resolve(__dirname, 'src', 'core'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new copyWebpackPlugin({
      patterns: [
        { 
          from: path.resolve(__dirname, 'src', 'img'),
          to: path.resolve(__dirname, 'build', 'img'), 
        },
        
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
    }),
  ],
  module: {
    rules: [
    {
      test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
    },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
}
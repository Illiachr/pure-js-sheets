const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';
  const isDev = !isProd;

  const filename = (ext) =>
    isProd ? `[name].[contenthash].bundle.${ext}` : `[name].bundle.${ext}`;

  const plugins = () => {
    const base = [
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src', 'img'),
            to: path.resolve(__dirname, 'build', 'img'),
          },

        ],
      }),
      new MiniCssExtractPlugin({
        filename: `./css/${filename('css')}`,
      }),
      new CleanWebpackPlugin()
    ];

    if (isDev) {
      base.push(new ESLintWebpackPlugin());
    }

    return base;
  };

  return {
    target: 'web',
    context: path.resolve(__dirname, 'src'),
    entry: {
      main: ['@babel/polyfill', './index.js']
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: `./js/${filename('js')}`,
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@core': path.resolve(__dirname, 'src', 'core'),
      }
    },
    devServer: {
      port: '3000',
      open: true,
      hot: true,
      // watchContentBase: true,
      compress: true,
      overlay: true,
      writeToDisk: true,
      historyApiFallback: true,
    },
    plugins: plugins(),
    devtool: isDev ? 'source-map' : false,
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
      ]
    },
  };
};

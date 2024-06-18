const path = require('path');
const svgToMiniDataURI = require('mini-svg-data-uri');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const themeDistPath = 'dist/';

const plugins = [
  new MiniCssExtractPlugin({
    filename: 'style.css',
    chunkFilename: 'style.[contenthash].css',
  }),
];

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    path: path.join(__dirname, themeDistPath),
    filename: 'main.js',
    assetModuleFilename: 'assets/images/[name][ext]',
  },
  plugins,
  module: {
    rules: [
      {
        test: '/.js$/i',
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|otf)$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
          limit: 1024,
          outputPath: 'assets/fonts',
          publicPath: '/assets/fonts',
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset',
      },
      {
        test: /\.svg/,
        type: 'asset/inline',
        loader: 'svgo-loader',
        generator: {
          dataUrl: (content) => {
            content = content.toString();
            return svgToMiniDataURI(content);
          },
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
};

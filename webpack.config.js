const path = require('path');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = 'production';

module.exports = {
  mode,
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.css', '.scss'],
    alias: {
      '~': path.resolve(process.cwd(), 'src'),
    },
  },
  entry: {
    styles: './src/main.scss',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { url: false, importLoaders: 1 } },
          { loader: 'postcss-loader', options: { plugins: [autoprefixer(), cssnano()] } },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'cssonly.css'
    })
  ]
}

const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackObfuscator = require('webpack-obfuscator');
const common = require('./webpack.common.js')
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: 'production',

  output: {
    filename: '[name].[fullhash:5].js',
    chunkFilename: '[id].[fullhash:5].css'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[fullhash:5].css',
        chunkFilename: '[id].[fullhash:5].css'
      }),
     new CssMinimizerPlugin()
    ]
  },

  plugins:
    (process.env.SECURITY) ? [
      new Dotenv({
        path: `./.env.production`
      }),
        new WebpackObfuscator ({
      rotateStringArray: true
    }, ['excluded_bundle_name.js'])] : [
      new Dotenv({
        path: `./.env.production`
      })
    ]
})

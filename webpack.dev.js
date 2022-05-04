const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require('path')

const common = require('./webpack.common')
const Dotenv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: 'development',

  output: {
    filename: '[name].js',
    chunkFilename: '[id].css'
  },

  devServer: {
    port: process.env.PORT || 3100,
    static: path.join(process.cwd(), './dist'),
    hot: true,
    open: false,
    allowedHosts: 'auto',
    historyApiFallback: {
      rewrites: [{ from: /./, to: '404.html' }]
    }
  },

  plugins: [
    new Dotenv({
      path: `./.env.development`
    }),
    new BrowserSyncPlugin(
      // BrowserSync options
      {
        // browse to http://localhost:3000/ during development
        host: 'localhost',
        port: 8888,
        // proxy the Webpack Dev Server endpoint
        // (which should be serving on http://localhost:3100/)
        // through BrowserSync
        proxy: 'http://localhost:3100/'
      },
      // plugin options
      {
        // prevent BrowserSync from reloading the page
        // and let Webpack Dev Server take care of this
        reload: false
      }
    ),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        'dist/**/*.js',
        'dist/**/*.css',
        'site/data/webpack.json'
      ]
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
  ]
})

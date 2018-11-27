const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry:
    {
      main: ['@babel/polyfill', path.join(__dirname, '/src/client/index.js')],
      static: ['@babel/polyfill', path.join(__dirname, './src/static/index.js')],
    },
  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name]/bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              ['@babel/preset-react'],
            ],
            /* eslint-disable global-require */
            plugins: [
              require('babel-plugin-styled-components'),
              require('@babel/plugin-proposal-class-properties'),
            ],
            /* eslint-disable */
          },
        },
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/client/index.html'),
      chunks: ['main'],
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/static/error.html'),
      chunks: ['static'],
      filename: 'static.html'
    }),
    new CopyWebpackPlugin(
      [
        { from: path.join(__dirname, '/worker/worker.js'), to: path.join(__dirname, '/build') },
        { from: path.join(__dirname, '/worker/service-worker.js'), to: path.join(__dirname, '/build')},
        { from: path.join(__dirname, '/assets'), to: path.join(__dirname, '/build/assets') },
        { from: path.join(__dirname, '/favicon.ico'), to: path.join(__dirname, '/build') },
      ]
    )
  ],
  devServer: {
    historyApiFallback: true,
  },
}

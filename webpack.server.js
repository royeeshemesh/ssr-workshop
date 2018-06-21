const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'none',

  target: 'node',

  entry: './src/server.js',

  output: {
    filename: 'bundled_server.js',
    path: path.resolve(__dirname, 'build')
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      }
    ]
  },

  externals: [webpackNodeExternals()]
};
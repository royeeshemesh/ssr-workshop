const path = require('path');

module.exports = {
  mode: 'none',

  entry: './src/client/client.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  devtool: 'inline-sourcemap',
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, './src/client'),
        ],
        exclude: '/node_modules/'
      }
    ]
  }
};
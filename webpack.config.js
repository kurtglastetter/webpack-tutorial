const path = require('path')

const package = require('./package')

module.exports = {
  entry: path.resolve(__dirname, package.main),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-tutorial.bundle.js',
  },

  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader'},
    ]
  },
}

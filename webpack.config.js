const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['webpack-hot-middleware/client?reload=true', './src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.js$|\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
    template: 'src/index.html'
  }),
  ]
}
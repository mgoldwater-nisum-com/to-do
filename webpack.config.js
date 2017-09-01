import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: ['webpack-hot-middleware/client?reload=true', './src/index.jsx'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '/dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.js$|\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
      {test: /\.css$/, use: [{loader: 'style-loader'}, {loader: 'css-loader', options: {
        modules: true,
        sourceMap: true,
        localIdentName: '[local]___[hash:base64:5]'
      }}]}
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
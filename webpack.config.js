var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './app/app.js',
  output: {
    path: './build',
    publicPath: 'www.test.com/',
    filename: '[name].js'
  },
  externals: {
    "angular": "angular"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.(jpe?g|png|gif|svg)$/i, loaders: ['image?bypassOnDebug&optimizationLevel=7&interlaced=false']}
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
};

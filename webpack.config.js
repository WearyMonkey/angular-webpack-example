var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
console.log(__dirname);
module.exports = {
  entry: './app/app.js',
  output: {
    path: './build',
    publicPath: 'www.test.com/',
    filename: 'bundle.js'
  },
  externals: {
    "angular": "angular"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')},
      { test: /\.(jpe?g|png|gif|svg)$/i, loaders: ['image?bypassOnDebug&optimizationLevel=7&interlaced=false']},
      {
        test: /\.html$/,
        exclude: "index.html",
        loader: "ngtemplate?module=myTemplates&relativeTo=^" +
            (path.resolve(__dirname, '/app/')) + "!html"
      }

    ]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css")
  ]
};

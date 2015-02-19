var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

//console('dir', path.resolve(__dirname, './app/templates/'));
console.log('dir');

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
  // resolve: {
  //   extensions: ['.html']
  // },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')},
      { test: /\.(jpe?g|png|gif|svg)$/i, loaders: ['image?bypassOnDebug&optimizationLevel=7&interlaced=false']},
      {
        test: /\.html$/,
<<<<<<< HEAD
        loader: "ng-cache?prefix=[dir]"
=======
        exclude: "index.html",
        loader: "ngtemplate?module=myTemplates&relativeTo=^" +
            (path.resolve(__dirname, 'app/templates/')) + "!html"
>>>>>>> 751f4943453312f43ba83d0f12e328e89e0d1c18
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("bundle.css")
  ]
};

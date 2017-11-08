var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/app.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      },
      { 
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.(png|jpg|)$/,
        loader: 'url-loader?limit=200000&name=../media/[hash].[ext]'
      }
    ]
  },
  devServer: {
    publicPath: "/",
    contentBase: "./src/",
    hot: true,
    inline: true,
    port: 3000
},
  output: {
    path: __dirname + "/src/js/",
    filename: "bundle.min.js"
  },
  plugins: [
    new ExtractTextPlugin("../css/bundle.css"),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    })
  ],
};
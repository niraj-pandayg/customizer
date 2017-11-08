
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './js/app.js' // Your appʼs entry point
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react,plugins[]=transform-decorators-legacy,plugins[]=react-html-attrs,plugins[]=transform-class-properties'],
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    })
  ],
};
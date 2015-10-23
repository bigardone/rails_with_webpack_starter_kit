var path = require("path");
var webpack = require('webpack');
var ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: {
    vendor: [
      'jquery',
      'jquery-ujs',
    ],
    application:  "./app/frontend/javascripts/application.coffee"
  },
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "[name]_bundle.js",
    publicPath: "/assets",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  resolve: {
    extensions: ["", ".jsx", ".cjsx", ".coffee", ".js"],
    modulesDirectories: ["node_modules", "javascripts"]
  },
  module: {
    loaders: [
      { test: /\.js?$/, loader: 'babel',  exclude: /node_modules/ },
      { test: /\.cjsx$/, loaders: ["coffee", "cjsx"] },
      { test: /\.coffee$/,   loader: "coffee-loader" },
      { test: /\.sass/, loader: ExtractPlugin.extract('style', 'css?sourceMap!sass?indentedSyntax&sourceMap') }
    ]
  },
  plugins: [
    new ExtractPlugin('../stylesheets/[name]_bundle.css'),
    new webpack.ProvidePlugin({
      'React': 'react',
      'ReactDom': 'react-dom',
      'I18n': 'i18n-js',
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ]
}

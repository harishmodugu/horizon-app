var webpack = require('webpack');
var path = require('path');
module.exports = {
  context: path.resolve('src/scripts'),
  entry: "./entry.js",
  output: {
    path: path.resolve("dist/scripts/"),
    publicPath: "/public/scripts/",
    filename: "bundle.js"
  },
  watch:true,
  resolve: ['', 'js','css','scss'],
  module : {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass']},
      { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000'},
      { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery'}
     // { test: /\.htm$/, loader: 'file'}
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      jquery: "jquery"
    })
  ],
  devServer: {
    inline: true,
    hot: true,
    contentBase: "public"
  }
};

var webpack = require('webpack');
var path = require('path');
module.exports = {
  context: path.resolve('scripts'),
  entry: "./src/entry.js",
  output: {
    path: path.resolve("build/scripts/"),
    publicPath: "/public/scripts",
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
    proxy: {
      '*': {
        target: 'http://localhost:8181'
      }
    },
    inline: true,
    hot: true,
    contentBase: "dist"
  }
};

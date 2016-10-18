module.exports = {
  entry: "./src/main.js",
  output: {
    path: "dist",
    publicPath: "dist",
    filename: "bundle.js"
  },
  module : {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  devServer: {
    proxy: {
      '*': {
        target: 'http://localhost:8181'
      }
    },
    inline: true,
    hot: true,
    contentBase: "dist"
  },
};

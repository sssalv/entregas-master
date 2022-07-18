const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    dev: ["./src/dev/scripts.js,./src/dev/style.css"],
    prod:["./src/scripts.js,./src/style.css"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader","css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      scriptLoading: "blocking",
      hash:"true"
    })
  ]
};

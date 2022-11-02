const common = require("./webpack.common.js")
const {merge} = require("webpack-merge")

const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = merge(common,{
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devServer:{
    hot:true,
    devMiddleware:{
      stats: "errors-only",
    },
  },
});

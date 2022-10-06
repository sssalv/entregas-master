const common = require("./webpack.common.js")
const {merge} = require("webpack-merge")

module.exports = merge(common,{
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ]
      },
    ],
  },
});

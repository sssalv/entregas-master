const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  resolve: {
    extensions: ['.js','.jsx','.ts','.tsx']
  },
  entry: {
    prod:["./src/scripts.tsx","./src/style.scss"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          "css-loader",
          "sass-loader"],
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
  ],
};

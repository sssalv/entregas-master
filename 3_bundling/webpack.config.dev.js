const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


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
    new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      scriptLoading: "blocking",
      hash:"true"
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id]'.css,
    })
  ],
  devServer:{
    hot:true,
    devMiddleware:{
      stats: "errors-only",
    },
  },
};

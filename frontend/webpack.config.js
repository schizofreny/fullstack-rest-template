const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")

module.exports = () => {
  return {
    entry: "./src/main.tsx",
    output: {
      path: path.resolve("./dist"),
      publicPath: "/",
      filename: "[name][fullhash].js",
    },
    module: {
      rules: [
        {
          test: /\.(jsx|tsx|js|ts)$/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin(),
      new HtmlWebPackPlugin({ template: "./public/index.html" }),
      new CleanWebpackPlugin(),
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
    devServer: {
      contentBase: path.resolve(__dirname, "dist"),
      historyApiFallback: true,
      proxy: {
        "/api": "http://localhost:4000",
        "/graphql": "http://localhost:4000",
      },
    },
  }
}

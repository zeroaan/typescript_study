import * as path from "path";
import * as ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { Configuration } from "webpack";

const config: Configuration = {
  name: "minesearch-dev",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
  },
  entry: {
    app: "./client",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        options: { plugins: ["react-refresh/babel"] },
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: path.join(__dirname, "node_modules"),
      },
    ],
  },
  plugins: [new ReactRefreshPlugin()],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/dist",
  },
  devServer: {
    publicPath: "/dist/",
    hot: true,
  },
};
export default config;

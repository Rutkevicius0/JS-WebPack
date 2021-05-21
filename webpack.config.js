const HtmlWebpackPlugin = require("html-webpack-plugin");
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map", // kai sukompiliuojam nebutu nesamoniu nereikalingu
  devServer: {
    contentBase: "./dist",
  },
  entry: {
    //nurodom pagrindini js faila
    main: path.resolve(__dirname, "./src/app.js"),
  },
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "This is dinamic Webpack title",
      template: "src/indexTemplate.html",
    }),
    //new MiniCssExtractPlugin(),
  ],
};

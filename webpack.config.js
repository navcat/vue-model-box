const path = require('path')
const webpack = require("webpack");
// const VueLoaderPlugin = require("vue-loader/lib/plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // 入口文件
  entry: {
    main: __dirname + "/src/index.js"
  },
  // 输出文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      // Es6 转换为 es2015
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          // options: {
          //   presets: ["es2015"]
          // }
        },
        exclude: ["node_modules"]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "vue-style-loader"
          },
          // {
          //   loader: "style-loader"
          // },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  plugins: []
};

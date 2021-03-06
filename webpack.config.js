const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProduction = process.env.NODE_ENV === "production"
const mode = isProduction ? "production" : "development"

const output = {
  path: path.resolve(__dirname, "./public"),
  filename: "bundle-[hash].js"
}

const babelLoader = {
  test: /\.(js|jsx)?$/,
  exclude: /node_modules/,
  loader: "babel-loader",
}

const tsLoader = {
  test: /\.(ts|tsx)?$/,
  exclude: /node_modules/,
  use: [
    { loader: "babel-loader"},
    { loader: "ts-loader" }
  ]
}

const fileLoader = {
  test: /\.(jpg|jpeg|png|gif|svg|eot|ttf|woff|woff2)$/i,
  use: [
    {
      loader: "file-loader",
      options: {
        name: "[path][name]-[hash].[ext]",
      }
    }
  ]
}

const sassLoader = {
  test: /\.(scss|sass)?$/i,
  use: [
    { loader: "style-loader" },
    {
      loader: "css-loader",
      options: {
        modules: {
          localIdentName: "[name]__[local]___[hash:base64:5]"
        },
        sourceMap: true
      }
    },
    {
      loader: "postcss-loader",
      options: { sourceMap: true }
    },
    {
      loader: "sass-loader",
      options: { sourceMap: true }
    }
  ]
}

const loaders = [
  babelLoader,
  tsLoader,
  fileLoader,
  sassLoader
]

const plugins = [
  new HtmlWebpackPlugin({ template: "./index.html" })
]

const resolve = {
  extensions: [".js", ".jsx", ".ts", ".tsx"],
  modules: [
    path.resolve(__dirname, "src"),
    "node_modules"
  ]
}

const devServer = {
  historyApiFallback: true,
  contentBase: path.resolve(__dirname, "./public"),
  inline: true,
  hot: true,
  host: '0.0.0.0',
  port: 8081
}

module.exports = {
  mode,
  entry: "./src/index.tsx",
  output,
  module: {
    rules: loaders
  },
  plugins,
  resolve,
  devServer
}

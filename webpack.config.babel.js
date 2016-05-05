import Path from "path"
import "babel-polyfill"
import LiveReloadPlugin from "webpack-livereload-plugin"


const path = Path.join.bind(null, __dirname)
const outputDirName = "build"
const outputDir = path(outputDirName)

export default {
  entry: [ "babel-polyfill", "./src/main" ],
  output: {
    path: outputDir,
    filename: "[name].js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ["babel"]},
    ]
  },
  devServer: {
    contentBase: outputDir
  },
  plugins: [
    new LiveReloadPlugin({
      appendScriptTag: true
    })
  ]
}

import Path from "path"
import Webpack from "webpack"
import "babel-polyfill"



const ENVS = {
  PRODUCTION: "production",
  DEVELOPMENT: "development",
}


const path = Path.join.bind(null, __dirname)
const outputDirName = "build"
const outputDir = path(outputDirName)
const env = process.env.NODE_ENV || ENVS.DEVELOPMENT

console.log(`Building in environment "${env}"`)



// Bail build if an unknown environment is detected.

if (env !== undefined && Object.values(ENVS).indexOf(env) === -1) {
  console.log(`Build Failed: Unknown environment ${env}`)
  process.exit(1)
}



const plugins =
  env === ENVS.PRODUCTION
  ? [
    new Webpack.optimize.UglifyJsPlugin({})
  ]
  : []



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
  devtool: "source-map",
  devServer: {
    contentBase: outputDir
  },
  plugins,
}

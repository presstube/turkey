import Path from 'path'

const path = Path.join.bind(null, __dirname)
const outputDirName = 'build'
const outputDir = path(outputDirName)

export default {
  entry: {
    main: './src/main'
  },
  output: {
    path: outputDir,
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: outputDir
  }
}



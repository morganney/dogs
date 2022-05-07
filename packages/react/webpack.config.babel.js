import path from 'path'

import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  target: 'web',
  context: __dirname,
  entry: {
    dogs: path.resolve(__dirname, './src/index.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'dogs.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Dogs',
      filename: 'index.html',
      template: path.resolve(__dirname, './src/index.html'),
      inject: true
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true
  }
}

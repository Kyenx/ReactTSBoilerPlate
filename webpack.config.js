const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: `${APP_DIR}/index.tsx`,
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.min.js'
  },
  // devServer: {
  //   // host: '10.58.188.242', //172.17.5.193
  //   port: 9010
  // },
  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
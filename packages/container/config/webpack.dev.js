const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const package = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container', 
      remotes: {
        marketing: 'marketing@http://localhost:8081/remoteEntry.js', 
      },
      //share dependencies via package.json dependencies list
      shared: package.dependencies,
    })
  ]
}

module.exports = merge(commonConfig, devConfig);

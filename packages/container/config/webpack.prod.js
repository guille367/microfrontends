const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const package = require('../package.json');

//const host = process.env.PRODUCTION_HOST;
const host = 'http://localhost:8081';

const devConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container', 
      remotes: {
        marketing: `marketing@/${host}/remoteEntry.js`, 
      },
      //share dependencies via package.json dependencies list
      shared: package.dependencies,
    })
  ]
}

module.exports = merge(commonConfig, devConfig);

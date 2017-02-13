const webpack = require('webpack');
const path = require('path');

const srcPath = path.join(__dirname, 'app');
const buildPath = path.join(__dirname, 'public');

const config = {
  context: srcPath,
  entry: path.join(srcPath, 'app.js'),
  output: {
    path: buildPath,
    filename: 'bundle.js'
  }, 
  module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    }
};

module.exports = config;
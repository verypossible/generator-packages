const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./common');

const ROOT = path.resolve(__dirname, '..');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(ROOT, 'public'),
    compress: true,
    port: 8000
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
  ]
});

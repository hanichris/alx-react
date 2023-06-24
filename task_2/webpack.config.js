const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'js/dashboard_main.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "bundle.js",
    assetModuleFilename: 'assets/[hash][ext]',
  },
  performance: {
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.js');
    },
    hints: 'error',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'},
        ],
      },
      {
        test: /\.(?:png|ico|gif|jpe?g)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
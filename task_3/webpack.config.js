const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    // header: path.resolve(__dirname, 'header/header.js'),
    // body: path.resolve(__dirname, 'body/body.js'),
    // footer: path.resolve(__dirname, 'footer/footer.js'),
    header: {
      import: path.resolve(__dirname, 'header/header.js'),
      dependOn: 'shared',
    },
    body: {
      import: path.resolve(__dirname, 'body/body.js'),
      dependOn: 'shared',
    },
    footer: {
      import: path.resolve(__dirname, 'footer/footer.js'),
      dependOn: 'shared',
    },
    shared: 'jquery',
  },
  devtool: 'source-map',
  plugins: [new HtmlWebpackPlugin()],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    clean: true,
    publicPath: '/',
    assetModuleFilename: 'assets/[hash][ext]',
  },
  optimization: {
    runtimeChunk: 'single',
    // splitChunks: {
    //   chunks: 'all',
    // },
  },
  devServer: {
    static: './public',
    open: true,
    port: 8564,
    onListening: function (devServer) {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined.');
      }
      const port = devServer.server.address().port;
      console.log(`listening on port: ${port}`);
    }
  },
  performance: {
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.js');
    },
    hints: 'warning',
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
var webpack = require('webpack'),
    path = require('path');

module.exports = {
  entry: {
    client: [
      'webpack-dev-server/client?http://0.0.0.0:4001',
      'webpack/hot/only-dev-server',
      './src/client/client'
    ],
    session: [
      'webpack-dev-server/client?http://0.0.0.0:4001',
      'webpack/hot/only-dev-server',
      './src/client/session'
    ]
  },

  devtool: '#inline-source-map',

  output: {
    path: path.join(__dirname, '/build/'),
    filename: "[name].js",
    publicPath: 'http://localhost:4001/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

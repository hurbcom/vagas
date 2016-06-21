var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './src/index',
    ],
    vendors: [
      'react',
      'react-dom',
      'react-redux',
      'redux',
      'redux-thunk',
      'lodash',
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.bundle.js', Infinity),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react'),
      'models': path.join(__dirname, './src/models'),
      'components': path.join(__dirname, './src/components'),
      'containers': path.join(__dirname, './src/containers'),
      'actions': path.join(__dirname, './src/actions'),
      'styles': path.join(__dirname, './src/styles'),
    },
    extensions: ['', '.js'],
  },
  resolveLoader: {
    'fallback': path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel?cacheDirectory=./cache'],
      exclude: /node_modules/,
      include: path.join(__dirname, './src'),
    },
    {
      test: /\.less$/,
      loader: 'style!css!less',
      include: path.join(__dirname, './src'),
    },
    {
      test: /\.css?$/,
      loaders: ['style', 'raw'],
      include: path.join(__dirname, './src'),
    },
    {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
      loader: 'url-loader?limit=8192',
    }],
  },
}

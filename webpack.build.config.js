var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    app: [path.join(__dirname, './src/index')],
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
    publicPath: '',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.bundle.js', Infinity),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: false,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin(),
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
      include: path.join(__dirname, './src'),
    }],
  },
}

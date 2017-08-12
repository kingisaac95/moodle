const path = require('path');
const webpack = require('webpack');

// webpack.config.js
module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    path.resolve(__dirname, 'client/index')
  ],
  target: 'web',
  output: {
    path: path.join(__dirname,'./dist/'), // Note: Physical files are only output by the production build task `npm run build`.
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
        { test: /(\.css)$/, loaders: ['style-loader', 'css-loader'] },
        { test: /\.(js|jsx)$/, include: path.join(__dirname, 'client'),loader: 'babel-loader', query: { presets: ['es2015', 'react'] } },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
        { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'client')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['.js', '.json', '.jsx']
  }
};

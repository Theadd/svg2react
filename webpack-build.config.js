var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index'
  },
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: './static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      IN_BROWSER: true
    })
  ],
  resolve: {
    extensions: ['', '.js'],
    alias: {
      'fs': require.resolve("./src/lib/fs.js")
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
      {test: /\.json$/, loader: 'json-loader'},
      {
        test: require.resolve("react"),
        loader: "expose?React"
      },
      {
        test: require.resolve("react-dom"),
        loader: "expose?ReactDOM"
      }
    ]
  }
};

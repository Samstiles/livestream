module.exports = {
  eslint: '.eslintrc',
  entry: './src/index.js',
  output: {
    path: __dirname + '/build',
    filename: 'index.bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /(node_modules|compiled)/
      }
    ],
    loaders: [
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
        loader: 'file'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|compiled)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};

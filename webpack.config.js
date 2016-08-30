module.exports = {
  eslint: '.eslintrc',
  entry: './src/index.js',
  output: {
    path: './build',
    filename: 'index.bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /(node_modules|build)/
      }
    ],
    loaders: [
      {
        exclude: /(node_modules|build)/,
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
        loader: 'file'
      },
      {
        exclude: /(node_modules|build)/,
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|build)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      }
    ]
  }
};

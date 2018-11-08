const path = require('path');

module.exports = {
  entry: {
    main: './src/Index.js'
  },
  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        { 
          test: /\.css$/,
          use: [ 
            'style-loader',
            'css-loader'
          ],
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    devServer: {
      contentBase: './app',
      port: 9999
    }
  };
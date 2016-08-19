const path = require('path');

const APP_DIR = path.resolve(__dirname, 'app');

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    publicPath: '',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;

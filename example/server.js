const { webpackConfig, webpackDevServer } = require('webpack-base-config');

const Options = {
  entry: './index.js',
  htmlTemplate: './index.html',
};

webpackDevServer(webpackConfig(Options));

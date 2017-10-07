const express = require('express');
const webpack = require('webpack');
const path = require('path');
const open = require('open');
const dotenv = require('dotenv');
const config = require('../webpack.config.dev');

/* eslint-disable no-console */

dotenv.config();

const port = process.env.PORT || 4040;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../client/index.html'));
});

app.listen(port, err =>{
  if (!err) open(`http://localhost:${port}`);  else {
    console.log(err);
  }
});

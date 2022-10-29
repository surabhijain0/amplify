var auth = require('./routes/auth');
var config = require('./client/webpack.config');
var dotenv = require('dotenv');
var express = require('express');
var path = require('path');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');

dotenv.config();

var app = express();
var compiler = webpack(config);
const PORT = process.env.PORT || 3000;
const HOSTNAME = 'localhost';

app.use(webpackDevMiddleware(compiler));
app.use('/auth', auth);
app.use('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/client/public/index.html'));
});

app.listen(PORT, HOSTNAME, function(err) {
  if (err) console.log(err);
  console.log(`Listening on port ${PORT}`);
});
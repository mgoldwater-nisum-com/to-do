const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
const compiler = webpack(config);

const port = 3000;
const app = express();

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));


// app.use(express.static('src'));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'src/index.html'));
// })

app.listen(port, () => {
  console.log('App is listening on port 3000');
})
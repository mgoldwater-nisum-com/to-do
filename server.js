import express from 'express';
import webpack from 'webpack';
import open from 'open';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.js';
const compiler = webpack(config);

const port = 3000;
const app = express();

app.use(webpackDevMiddleware(compiler, {
  noInfo: true, publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

// app.use(express.static('src'));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'src/index.html'));
// })

app.listen(port, () => {
  open('http://localhost:' + port);
  console.log(`App is listening on port ${port}`); // eslint-disable-line no-console
});
import express from 'express';
import webpack from 'webpack';
import open from 'open';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.js';
import {getToDos} from './db';
const compiler = webpack(config);

export const port = 3000;
export const app = express();

app.use(webpackDevMiddleware(compiler, {
  noInfo: true, publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('/todos', (req, res) => {
  getToDos( (todos) => {
    res.send(todos);
  });
});

export default app;
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import bodyParser from 'body-parser';
import config from '../webpack.config.js';
import {getToDos, addToDo} from './db';
const compiler = webpack(config);

export const port = 3000;
export const app = express();

app.use(webpackDevMiddleware(compiler, {
  noInfo: true, publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/todos', (req, res) => {
  getToDos( (todos) => {
    res.send(todos);
  });
});

app.post('/todos', (req, res) => {
  addToDo(req.body, res);
});

export default app;
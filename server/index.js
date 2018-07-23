import path from 'path';
import Koa from 'koa';
import Pug from 'koa-pug';
import socket from 'socket.io';
import http from 'http';
import Router from 'koa-router';
import koaLogger from 'koa-logger';
import middleware from 'koa-webpack';
import bodyParser from 'koa-bodyparser';
import session from 'koa-generic-session';
import _ from 'lodash';
import serve from 'koa-static';
import addRoutes from './routes';

import webpackConfig from '../webpack.config';

export default () => {
  const app = new Koa();

  app.keys = ['some secret hurr'];
  app.use(session(app));
  app.use(bodyParser());
  if (process.env.NODE_ENV !== 'production') {
    app.use(middleware({
      config: webpackConfig,
    }));
  }

  const router = new Router();

  app.use(koaLogger());
  const pug = new Pug({
    viewPath: path.join(__dirname, '..', 'views'),
    debug: true,
    pretty: true,
    compileDebug: true,
    locals: [],
    noCache: process.env.NODE_ENV !== 'production',
    basedir: path.join(__dirname, 'views'),
    helperPath: [
      { _ },
      { urlFor: (...args) => router.url(...args) },
    ],
  });
  pug.use(app);

  const server = http.createServer(app.callback());
  const io = socket(server);

  addRoutes(router, io);
  app.use(router.allowedMethods());
  app.use(router.routes());
  app.use(serve('/app'));

  return server;
};

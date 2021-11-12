const express = require('express');

const personRouter = require('./persons.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/', router);
  router.use('/persons', personRouter);
}

module.exports = routerApi;

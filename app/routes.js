const express = require('express');

const routes = express.Router();

const loginController = require('./controllers/loginController');

routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash('success');
  res.locals.flashError = req.flash('error');
  next();
});

routes.get('/', loginController.login);

routes.post('/autenticacao', loginController.autenticacao);

module.exports = routes;

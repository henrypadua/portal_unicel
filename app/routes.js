const express = require('express');

const routes = express.Router();

const authMiddleware = require('./middlewares/auth');

const loginController = require('./controllers/loginController');
const dashboardController = require('./controllers/dashboardController');

routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash('success');
  res.locals.flashError = req.flash('error');
  next();
});

routes.get('/', loginController.login);
routes.get('/app/dashboard', dashboardController.index);

routes.post('/', loginController.autenticacao);

routes.use('/app', authMiddleware);

module.exports = routes;

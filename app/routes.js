const express = require('express');

const routes = express.Router();

const authMiddleware = require('./middlewares/auth');
const guestMiddleware = require('./middlewares/guest');

const loginController = require('./controllers/loginController');
const dashboardController = require('./controllers/dashboardController');

routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash('success');
  res.locals.flashError = req.flash('error');
  next();
});

routes.get('/', guestMiddleware, loginController.login);
routes.get('/logout', loginController.logout);
routes.get('/app/dashboard', dashboardController.index);

routes.use((req, res) => res.render('errors/404'));

routes.post('/', loginController.autenticacao);

routes.use('/app', authMiddleware);

routes.use((err, req, res, _next) => {
  res.status(err.status || 500);

  return res.render('errors/index', {
    message: err.message,
    error: process.env.NODE_ENV === 'production' ? {} : err,
  });
});

module.exports = routes;

const express = require('express');

const routes = express.Router();
const authMiddleware = require('./middlewares/auth');
const guestMiddleware = require('./middlewares/guest');
const loginController = require('./controllers/loginController');
const dashboardController = require('./controllers/dashboardController');
const membroController = require('./controllers/membroController');
const celulaController = require('./controllers/celulaController');

routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash('success');
  res.locals.flashError = req.flash('error');
  next();
});

/**
 * Autenticação
 */
routes.get('/', guestMiddleware, loginController.login);
routes.get('/logout', loginController.logout);

routes.post('/autenticacao', loginController.autenticacao);

/**
 * DashBoard
 */
routes.use('/app', authMiddleware);

routes.get('/app/dashboard', dashboardController.index);

/**
 * Cadastros
 */
routes.post('/app/modulos/pessoas/create', membroController.cadastro);
routes.get('/app/modulos/pessoas', membroController.membros);

routes.post('/app/modulos/celulas/create', celulaController.cadastro);
routes.get('/app/modulos/celulas', celulaController.celulas);

/**
 * Paginas de Erro
 */
routes.use((req, res) => res.render('errors/404'));

routes.use((err, req, res, _next) => {
  res.status(err.status || 500);

  return res.render('errors/index', {
    message: err.message,
    error: process.env.NODE_ENV === 'production' ? {} : err,
  });
});

module.exports = routes;

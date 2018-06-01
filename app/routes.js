const express = require('express');

const routes = express.Router();

const loginController = require('./controllers/loginController');

routes.get('/', loginController.login);

module.exports = routes;

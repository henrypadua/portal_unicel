const { Usuario } = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
  login(req, res) {
    return res.render('login/signin');
  },

  async autenticacao(req, res) {
    const { email, senha } = req.body;

    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      req.flash('error', 'Usuário Inexistente!');
      return res.redirect('back');
    }

    if (!await bcrypt.compare(senha, usuario.senha)) {
      req.flash('error', 'Senha Incorreta!');
      return res.redirect('back');
    }

    req.session.usuario = usuario;

    return req.session.save(() => {
      res.redirect('app/dashboard');
      req.flash('success', 'Logado com Sucesso!');
    });
  },
};

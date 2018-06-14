
const { Membro } = require('../models');

module.exports = {
  async cadastro(req, res, next) {
    try {
      const { nome } = req.body;

      const membro = await Membro.findOne({ where: { nome } });

      if (membro) {
        req.flash('error', 'Membro com nome já cadastrado!');
        return res.redirect('back');
      }

      await Membro.create(req.body);

      req.flash('success', 'Membro cadastrado com sucesso.');
      return res.redirect('/app/modulos/pessoas');
    } catch (err) {
      return next(err);
    }
  },

  async membros(req, res, next) {
    try {
      const membros = await Membro.findAll({
        order: [['nome', 'ASC']],
      });

      return res.render('modulos/pessoas/membros', {
        tela: 'Pessoas',
        membros,
      });
    } catch (err) {
      return next(err);
    }
  },

};

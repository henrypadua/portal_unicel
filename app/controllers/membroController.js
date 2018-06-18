const { Membro } = require('../models');
const { Celula } = require('../models');
const { Tiposmembro } = require('../models');


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

      const tiposmembros = await Tiposmembro.findAll({
        order: [['nome', 'ASC']],
      });

      const celulas = await Celula.findAll({
        order: [['nome', 'ASC']],
      });

      return res.render('modulos/pessoas/membros', {
        tela: 'Pessoas',
        membros,
        tiposmembros,
        celulas,
      });
    } catch (err) {
      return next(err);
    }
  },
};

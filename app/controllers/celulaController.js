const { Celula } = require('../models');
const { Membro } = require('../models');
const { Tiposcelula } = require('../models');

module.exports = {
  async cadastro(req, res, next) {
    try {
      const { nome } = req.body;

      const celula = await Celula.findOne({ where: { nome } });

      if (celula) {
        req.flash('error', 'Celula com nome já cadastrado!');
        return res.redirect('back');
      }

      await Celula.create(req.body);

      req.flash('success', 'Celula cadastrado com sucesso.');
      return res.redirect('/app/modulos/celulas');
    } catch (err) {
      return next(err);
    }
  },

  async celulas(req, res, next) {
    try {
      const celulas = await Celula.findAll({
        order: [['nome', 'ASC']],
      });

      const membros = await Membro.findAll({
        order: [['nome', 'ASC']],
      });

      const tiposcelulas = await Tiposcelula.findAll({
        order: [['nome', 'ASC']],
      });

      return res.render('modulos/celulas/cadastro', { tela: 'celulas', celulas }, { membros }, { tiposcelulas });
    } catch (err) {
      return next(err);
    }
  },
};


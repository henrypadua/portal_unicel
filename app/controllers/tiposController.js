const { Tiposmembro } = require('../models');

module.exports = {
  async tiposmembros(_req, _res) {
    const tiposmembros = await Tiposmembro.findAll({
      order: [['nome', 'ASC']],
    });
    return tiposmembros;
  },
};


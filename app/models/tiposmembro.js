module.exports = (sequelize, DataTypes) => {
  const Tiposmembro = sequelize.define('Tiposmembro', {
    nome: DataTypes.STRING,
  });

  return Tiposmembro;
};

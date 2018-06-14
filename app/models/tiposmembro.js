module.exports = (sequelize, DataTypes) => {
  const TiposMembro = sequelize.define('TiposMembro', {
    nome: DataTypes.STRING,
  });

  return TiposMembro;
};

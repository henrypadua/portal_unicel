module.exports = (sequelize, DataTypes) => {
  const TiposCelula = sequelize.define('TiposCelula', {
    nome: DataTypes.STRING,
  });

  return TiposCelula;
};

module.exports = (sequelize, DataTypes) => {
  const TiposCelula = sequelize.define('Tipos_celula', {
    nome: DataTypes.STRING,
  });

  return TiposCelula;
};

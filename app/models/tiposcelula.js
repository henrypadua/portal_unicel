module.exports = (sequelize, DataTypes) => {
  const Tiposcelula = sequelize.define('Tiposcelula', {
    nome: DataTypes.STRING,
  });

  Tiposcelula.associate = (models) => {
    Tiposcelula.hasmany(models.celula);
  };

  return Tiposcelula;
};

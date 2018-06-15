module.exports = (sequelize, DataTypes) => {
  const Tiposcelula = sequelize.define('Tiposcelula', {
    nome: DataTypes.STRING,
  });

  return Tiposcelula;
};

module.exports = (sequelize, DataTypes) => {
  const Regiao = sequelize.define('Regiao', {
    nome: DataTypes.STRING,
    cor: DataTypes.STRING,
  });

  return Regiao;
};

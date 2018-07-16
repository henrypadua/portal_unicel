module.exports = (sequelize, DataTypes) => {
  const Regiao = sequelize.define('Regiao', {
    nome: DataTypes.STRING,
    cor: DataTypes.STRING,
  });

  Regiao.associate = (models) => {
    Regiao.hasMany(models.Celula);
  };

  return Regiao;
};

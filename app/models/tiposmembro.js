module.exports = (sequelize, DataTypes) => {
  const Tiposmembro = sequelize.define('Tiposmembro', {
    nome: DataTypes.STRING,
  });

  Tiposmembro.associate = (models) => {
    Tiposmembro.hasMany(models.Membro);
  };

  return Tiposmembro;
};

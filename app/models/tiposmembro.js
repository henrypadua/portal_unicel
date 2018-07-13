module.exports = (sequelize, DataTypes) => {
  const Tiposmembro = sequelize.define('Tiposmembro', {
    nome: DataTypes.STRING,
  });

  Tiposmembro.associate = (models) => {
    Tiposmembro.hasmany(models.membro);
  };

  return Tiposmembro;
};

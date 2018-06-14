module.exports = (sequelize, DataTypes) => {
  const Membro = sequelize.define('Membro', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    dtnascimento: DataTypes.DATE,
    sexo: DataTypes.INTEGER,
    estadocivil: DataTypes.INTEGER,
    cpf: DataTypes.INTEGER,
    telefone: DataTypes.STRING,
    celular: DataTypes.STRING,
    foto: DataTypes.STRING,
  });

  Membro.associate = (models) => {
    Membro.belongsTo(models.regiao);
    Membro.belongsTo(models.membro);
    Membro.belongsTo(models.tiposmembro);
  };

  return Membro;
};


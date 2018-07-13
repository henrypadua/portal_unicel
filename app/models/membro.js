module.exports = (sequelize, DataTypes) => {
  const Membro = sequelize.define('Membro', {
    tipomembroId: DataTypes.INTEGER,
    celulaId: DataTypes.INTEGER,
    discipulador: DataTypes.STRING,
    respvisitante: DataTypes.STRING,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    dtnascimento: DataTypes.DATE,
    sexo: DataTypes.STRING,
    estadocivil: DataTypes.STRING,
    cpf: DataTypes.STRING,
    telefone: DataTypes.STRING,
    celular: DataTypes.STRING,
    foto: DataTypes.STRING,
    cep: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
    logradouro: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    complemento: DataTypes.STRING,
    bairro: DataTypes.STRING,
  });

  Membro.associate = (models) => {
    Membro.belongsTo(models.celula);
    Membro.belongsTo(models.tiposmembro);
  };

  return Membro;
};


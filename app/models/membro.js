module.exports = (sequelize, DataTypes) => {
  const Membro = sequelize.define('Membro', {
    tipomembroId: DataTypes.INTEGER,
    celulaId: DataTypes.INTEGER,
    discipuladorId: DataTypes.INTEGER,
    respvisitanteId: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    dtnascimento: DataTypes.DATE,
    sexo: DataTypes.INTEGER,
    estadocivil: DataTypes.INTEGER,
    cpf: DataTypes.INTEGER,
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

  return Membro;
};


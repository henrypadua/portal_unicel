module.exports = (sequelize, DataTypes) => {
  const Celula = sequelize.define('Celula', {
    nome: DataTypes.STRING,
    diasemana: DataTypes.STRING,
    horario: DataTypes.TIME,
    cep: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
    logradouro: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    complemento: DataTypes.STRING,
    bairro: DataTypes.STRING,
  });

  return Celula;
};

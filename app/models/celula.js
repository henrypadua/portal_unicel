module.exports = (sequelize, DataTypes) => {
  const Celula = sequelize.define('Celula', {
    anfitriaoId: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    diasemana: DataTypes.INTEGER,
    horario: DataTypes.TIME,
    liderId: DataTypes.INTEGER,
    lidertreinamento1Id: DataTypes.INTEGER,
    lidertreinamento2Id: DataTypes.INTEGER,
    lidertreinamento3Id: DataTypes.INTEGER,
    lidertreinamento4Id: DataTypes.INTEGER,
    supervisorId: DataTypes.INTEGER,
    secretarioId: DataTypes.INTEGER,
    respcomId: DataTypes.INTEGER,
    resporgId: DataTypes.INTEGER,
    resplouvId: DataTypes.INTEGER,
    respdimId: DataTypes.INTEGER,
    intercessorId: DataTypes.INTEGER,
    cep: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
    logradouro: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    complemento: DataTypes.STRING,
    bairro: DataTypes.STRING,
  });

  Celula.associate = (models) => {
    Celula.belongsTo(models.regiao);
    Celula.belongsTo(models.tiposcelula);
    Celula.hasmany(models.membro);
  };

  return Celula;
};

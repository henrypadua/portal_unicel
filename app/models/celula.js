module.exports = (sequelize, DataTypes) => {
  const Celula = sequelize.define('Celula', {
    RegiaoId: DataTypes.INTEGER,
    TipocelulaId: DataTypes.INTEGER,
    AnfitriaoId: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    diasemana: DataTypes.STRING,
    horario: DataTypes.TIME,
    LiderID: DataTypes.INTEGER,
    Lidertreinamento1Id: DataTypes.INTEGER,
    Lidertreinamento2Id: DataTypes.INTEGER,
    Lidertreinamento3Id: DataTypes.INTEGER,
    Lidertreinamento4Id: DataTypes.INTEGER,
    SupervisorId: DataTypes.INTEGER,
    SecretarioId: DataTypes.INTEGER,
    RespcomId: DataTypes.INTEGER,
    ResporgId: DataTypes.INTEGER,
    ResplouvId: DataTypes.INTEGER,
    RespdimId: DataTypes.INTEGER,
    IntercessorId: DataTypes.INTEGER,
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

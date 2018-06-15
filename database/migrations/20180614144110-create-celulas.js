module.exports = {
  up: (queryInterface, DataTypes) => {
    queryInterface.createTable('Celulas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      RegiaoId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      TipocelulaId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      AnfitriaoId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      diasemana: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      horario: {
        allowNull: false,
        type: DataTypes.TIME,
      },
      LiderID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Lidertreinamento1Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Lidertreinamento2Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Lidertreinamento3Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Lidertreinamento4Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      SupervisorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      SecretarioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      RespcomId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ResporgId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ResplouvId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      RespdimId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      IntercessorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cep: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      estado: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cidade: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      logradouro: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      numero: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      complemento: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      bairro: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    queryInterface.dropTable('Celulas');
  },
};

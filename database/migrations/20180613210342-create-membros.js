module.exports = {
  up: (queryInterface, DataTypes) => {
    queryInterface.createTable('Membros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      TipomembroId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      CelulaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      DiscipuladorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      RespvisitanteId: {
        type: DataTypes.INTEGER,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      dtnascimento: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      sexo: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      estadocivil: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      cpf: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      telefone: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      celular: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      foto: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      cep: {
        allowNull: false,
        type: DataTypes.STRING,
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
    queryInterface.dropTable('Membros');
  },
};

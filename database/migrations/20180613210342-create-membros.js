module.exports = {
  up: (queryInterface, DataTypes) => {
    queryInterface.createTable('Membros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      TiposmembroId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      CelulaId: {
        type: DataTypes.INTEGER,
        references: { model: 'Celulas', key: 'Id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      Discipulador: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Respvisitante: {
        type: DataTypes.STRING,
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
        type: DataTypes.STRING,
      },
      estadocivil: {
        allowNull: false,
        type: DataTypes.STRING,
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

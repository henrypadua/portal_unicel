module.exports = {
  up: (queryInterface, DataTypes) => {
    queryInterface.createTable('Membros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
	  Tipo_membroId: {
        type: DataTypes.INTEGER,
        references: { model: 'Tiposmembro', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      CelulaId: {
        type: DataTypes.INTEGER,
        references: { model: 'Celulas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      DiscipuladorId: {
        type: DataTypes.INTEGER,
        references: { model: 'Membros', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      Resp_visitanteId: {
        type: DataTypes.INTEGER,
        references: { model: 'Membros', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
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
        type: DataTypes.INTEGER,
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

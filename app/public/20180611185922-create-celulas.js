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
        type: DataTypes.INTEGER,
        references: { model: 'Regiao', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      Tipo_celulaId: {
        type: DataTypes.INTEGER,
        references: { model: 'Tipocelula', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      AnfitriaoId: {
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
      diasemana: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      horario: {
        allowNull: false,
        type: DataTypes.TIME,
      },
      LiderID: {
        type: DataTypes.INTEGER,
        references: { model: 'Membros', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },      
	  Lidertreinamento1Id: {
        type: DataTypes.INTEGER,
        references: { model: 'Membros', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },      
	  Lidertreinamento2Id: {
        type: DataTypes.INTEGER,
        references: { model: 'Membros', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },      
	  Lidertreinamento3Id: {
        type: DataTypes.INTEGER,
        references: { model: 'Membros', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },      
	  Lidertreinamento4Id: {
        type: DataTypes.INTEGER,
        references: { model: 'Membros', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },      
	  SupervisorId: {
        type: DataTypes.INTEGER,
        references: { model: 'Membros', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },     
	  SecretarioId: {
        type: DataTypes.INTEGER,
        references: { model: 'Membros', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },      
	  RespcomId: {
        type: DataTypes.INTEGER,
        references: { model: 'Membros', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },      
	  ResporgId: {
        type: DataTypes.INTEGER,
        references: { model: 'Membros', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },      
	  ResplouvId: {
        type: DataTypes.INTEGER,
        references: { model: 'Membros', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },      
	  RespdimId: {
        type: DataTypes.INTEGER,
        references: { model: 'Membros', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },      
	  IntercessorId: {
        type: DataTypes.INTEGER,
        references: { model: 'Membros', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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

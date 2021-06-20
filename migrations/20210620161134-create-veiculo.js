'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Veiculos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_marca: {
        type: Sequelize.INTEGER
      },
      id_modelo: {
        type: Sequelize.INTEGER
      },
      ano_fabricacao: {
        type: Sequelize.INTEGER
      },
      placa: {
        type: Sequelize.STRING
      },
      cor: {
        type: Sequelize.STRING
      },
      chassi: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Veiculos');
  }
};
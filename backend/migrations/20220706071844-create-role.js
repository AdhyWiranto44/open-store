'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('roles', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.BIGINT,
        defaultValue: Date.now()
      },
      updatedAt: {
        type: Sequelize.BIGINT,
        defaultValue: Date.now()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Roles');
  }
};
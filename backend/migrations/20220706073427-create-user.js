'use strict';


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      role_id: {
        references: {
          model: 'roles',
          key: "id"
        },
        type: Sequelize.INTEGER,
        defaultValue: 2
      },
      status_id: {
        references: {
          model: 'user_statuses',
          key: "id"
        },
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      full_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone_number: {
        type: Sequelize.STRING,
        allowNull: false
      },
      birthday: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      profile_photo: {
        type: Sequelize.STRING,
        defaultValue: ""
      },
      created_at: {
        type: Sequelize.BIGINT,
        defaultValue: Date.now()
      },
      updated_at: {
        type: Sequelize.BIGINT,
        defaultValue: Date.now()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
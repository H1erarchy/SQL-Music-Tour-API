'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stages', {
      stage_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stage_name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }, {
      Sequelize,
      modelName: 'Stages',
      tableName: 'stages',
      timestamps: false
    }
    
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stages');
  }
};
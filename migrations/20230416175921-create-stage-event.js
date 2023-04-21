'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stage_events', {
      stage_events_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stage_id: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      event_id: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
    }, {
      Sequelize,
      modelName: 'Stage_Events',
      tableName: 'stage_events',
      timestamps: false
    }
    
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stage_events');
  }
};
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bands', [{
      name: ' Tree Among Shrubs',
      genre: 'dream pop',
      available_start_time: '11:00:00',
      end_time: '23:00:00'
    }])
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.bulkDelete('People', null, {});
     
  }
};

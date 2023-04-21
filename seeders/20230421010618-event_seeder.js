'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bands', [{
      name: " Nostalgia",
      date: new Date(),
      available_start_time: new Date(),
      end_time: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.bulkDelete('People', null, {});
     
  }
};

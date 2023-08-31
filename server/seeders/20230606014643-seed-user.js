'use strict';
const users = require('./../data/users.json')
const tours = require('./../data/tours.json')
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    users.forEach(el => {
      let hash = bcrypt.hashSync(el.password, salt);
      el.password = hash
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })

    tours.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Users', users, {});
    await queryInterface.bulkInsert('Tours', tours, {});

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Tours', null, {});


    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
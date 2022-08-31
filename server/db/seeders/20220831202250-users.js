"use strict";
const axios = require("axios");

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = await axios("https://jsonplaceholder.typicode.com/users");

    const toInsert = users.data.map((element) => {
      const [firstName, lastName] = element.name.split(" ");
      const { id, email, phone } = element;

      return { id, firstName, lastName, email, phone, createdAt: new Date(), updatedAt: new Date() };
    });

    await queryInterface.bulkInsert("Users", toInsert, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};

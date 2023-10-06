module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: 'example@example.com',
      password: '$2b$08$fmGXpgisJhg3o.q255KDEORWkCkLUBI2U53/NdwvJai60dnOlBrRq', //ZAQ!2wsx
      verified: true,
      premium: true,
      name: 'example',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
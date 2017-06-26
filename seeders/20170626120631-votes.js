'use strict';

const models = require('../models');

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'votes',
      [
        {id: 1, item: 'Beer'},
        {id: 2, item: 'Wine'}
      ],
      {},
    );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('votes', null, {});
  }
};

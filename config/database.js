'use strict';

module.exports = {
  development: {
    username: 'sendbest',
    password: null,
    database: 'vote',
    host: '127.0.0.1',
    dialect: 'postgres',
    define: {
      underscored: true,
    },
  },
  test: {
    username: 'sendbest',
    password: null,
    database: 'vote',
    host: '127.0.0.1',
    dialect: 'postgres',
    define: {
      underscored: true,
    },
  },
  production: {
    username: 'sendbest',
    password: null,
    database: 'vote',
    host: 'postgresql-test.cumjeelzucrn.us-west-2.rds.amazonaws.com',
    dialect: 'postgres',
    define: {
      underscored: true,
    },
  }
}

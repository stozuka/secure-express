'use strict';

const env = require('env');

module.exports = {
  development: {
    username: env.development.username,
    password: env.development.password,
    database: env.development.database,
    host: env.development.host,
    dialect: env.development.dialect,
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
    username: env.production.username,
    password: env.production.password,
    database: env.production.database,
    host: env.production.host,
    dialect: env.production.dialect,
    define: {
      underscored: true,
    },
  }
}

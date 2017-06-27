'use strict';

const models = require('../models');
const debug = require('debug')('secure-express:server');

async function getTopPage(req, res, next) {
  try {
    const votes = await models.Vote.findAll();
    const data = votes.map(vote => vote.toJSON());
    debug(data);
    res.render('index', {data});
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getTopPage,
}

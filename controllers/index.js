'use strict';

const _ = require('lodash');
const models = require('../models');
const debug = require('debug')('secure-express:server');

async function getTopPage(req, res, next) {
  try {
    const votes = await models.Vote.findAll();
    let data = votes.map(vote => vote.toJSON());
    data = _.orderBy(data, 'id');
    debug(data);
    res.render('index', {data});
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getTopPage,
}

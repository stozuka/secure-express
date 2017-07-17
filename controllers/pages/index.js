'use strict';

const _ = require('lodash');
const models = require('../../models');

async function index(req, res, next) {
  try {
    const votes = await models.Vote.findAll();
    let data = votes.map(vote => vote.toJSON());
    data = _.orderBy(data, 'id');
    res.render('index', {data});
  } catch (e) {
    next(e);
  }
}

module.exports = {
  index,
}

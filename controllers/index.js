'use strict';

const models = require('../models');

async function getTopPage(req, res, next) {
  try {
    const votes = await models.Vote.findAll();
    const data = votes.map(vote => vote.toJSON());
    res.render('index', {data});
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getTopPage,
}

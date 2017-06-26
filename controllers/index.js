'use strict';

const Vote = require('../models').Vote;

async function getTopPage(req, res, next) {
  try {
    const votes = await Vote.findAll();
    const data = votes.map(vote => vote.toJSON());
    res.render('index', {data});
  } catch (e) {
    next(e);
  }
}

module.exports = {
  getTopPage,
}

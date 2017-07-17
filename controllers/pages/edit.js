'use strict';

const models = require('../../models');
const _ = require('lodash');

async function edit(req, res, next) {
  try {
    const votes = await models.Vote.findAll();
    let data = votes.map(vote => vote.toJSON());
    data = _.orderBy(data, 'id');
    res.render('edit', { data });
  } catch (e) {
    next(e);
  }
}

module.exports = {
  edit,
};

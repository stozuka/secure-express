'use strict';

const models = require('../../models');

async function incrementVotes(req, res, next) {
  try {
    const vote = await models.Vote.findById(req.body.id);
    const incremented = await vote.increment('votes');
    res.status(200).json(incremented);
  } catch (e) {
    next(e);
  }
}

module.exports = {
  incrementVotes,
};

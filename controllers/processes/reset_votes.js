'use strict';

const models = require('../../models');

async function resetVotes(req, res, next) {
  try {
    const values = { votes: 0 };
    const options = { where: { votes: { $not: 0 } } };
    await models.Vote.update(values, options);
    res.status(200).json({ message: 'Success' });
  } catch (e) {
    next(e);
  }
}

module.exports = {
  resetVotes,
};

'use strict';

const models = require('../models');

async function reset(req, res, next) {
  try {
    await models.Vote.update(
      { votes: 0 },
      {
        where: {
          votes: { $not: 0 }
        }
      }
    );
    res.status(200).json({ message: 'reset' });
  } catch (e) {
    next(e);
  }
}

module.exports = {
  reset,
};

'use strict';

function vote(req, res, next) {
  try {
    res.status(200).json({msg: 'vote'});
  } catch (e) {
    next(e);
  }
}

module.exports = {
  vote,
};

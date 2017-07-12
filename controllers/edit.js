'use strict';

const models = require('../models');

function edit(req, res, next) {
  try {
    res.status(200).json({msg: 'edit'});
  } catch (e) {
    next(e);
  }
}

module.exports = {
  edit,
};

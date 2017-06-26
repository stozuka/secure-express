'use strict';

function votes(req, res, next) {
  res.render('index', {message: 'Now developing'});
}

module.exports = {
  votes,
}

'use strict';

function votes(req, res, next) {
  res.render('votes', {message: 'Now developing'});
}

module.exports = {
  votes,
}

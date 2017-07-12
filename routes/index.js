'use strict';

const express = require('express');
const router = express.Router();
const { index } = require('../controllers');
const { vote } = require('../controllers/vote');
const { edit } = require('../controllers/edit');
const { reset } = require('../controllers/reset');

router.get('/', index);
router.put('/vote', vote);
router.put('/edit', edit);
router.put('/reset', reset);

module.exports = router;

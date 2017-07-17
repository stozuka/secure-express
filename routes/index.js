'use strict';

const express = require('express');
const router = express.Router();
// pages
const { index } = require('../controllers/pages');
const { edit } = require('../controllers/pages/edit');
// processes
const { incrementVotes } = require('../controllers/processes/increment_votes');
const { resetVotes } = require('../controllers/processes/reset_votes');
const { editItems } = require('../controllers/processes/edit_items');

router.get('/', index);
router.get('/edit', edit);

router.put('/vote', incrementVotes);
router.put('/reset', resetVotes);
router.put('/edit_items', editItems);

module.exports = router;

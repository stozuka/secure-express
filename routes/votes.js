'use strict';

const express = require('express');
const router = express.Router();
const {votes} = require('../controllers/votes');

router.get('/', votes);

module.exports = router;

'use strict';

const express = require('express');
const router = express.Router();
const {votes} = require('../controllers');

router.get('/', votes);

module.exports = router;

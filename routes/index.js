'use strict';

const express = require('express');
const router = express.Router();
const {getTopPage} = require('../controllers');

router.get('/', getTopPage);

module.exports = router;

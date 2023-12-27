/**
 * @license Apache-2.0
 * @copyright bassu 2024
 */

'use strict';

/**
 * node modules
 */

const router = require('express').Router();

/**
 * custom modules
 */

const { login } = require('../controllers/login.controller');


router.get('/login', login);

module.exports = router;
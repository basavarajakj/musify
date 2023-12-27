/**
 * @license Apache-2.0
 * @copyright bassu 2024
 */

'use strict';


/**
 * custom modules
 */
const apiConfig = require('../config/api.config');

const generateRandomString = function (length) {
  let /** {string | undefined} */ randomString = '';
  const /** {string} */ possibleLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for(let i = 0; i < length-1; i++) {
    const /** { number } */ randomIndex = Math.floor(Math.random() * possibleLetters.length);
    randomString += possibleLetters[randomIndex];
  }

  return randomString;
}

module.exports = { generateRandomString };
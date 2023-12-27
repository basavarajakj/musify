/**
 * @license Apache-2.0
 * @copyright bassu 2024
 */

'use strict';


/**
 * custom modules
 */
const axiosConfig = require('../config/axios.config');

/**
 * Refresh token is a security credentials that allows application to obtain new access tokens without requiring users tp reauthorize the application
 * 
 * @param {string} freshToken - the refresh token returned from the authorization token request
 * @returns { object}
 */
const getRefreshToken = async (freshToken) => {
  try{
    const response = await axiosConfig.token.post('/token', {
      grant_type: 'refresh_token',
      refresh_token: freshToken,
    });

    return response;
  } catch(err) {
    console.log(err);
  }
}

module.exports = { getRefreshToken };
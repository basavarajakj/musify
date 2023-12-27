/**
 * @license Apache-2.0
 * @copyright bassu 2024
 */

'use strict';


/**
 * node modules
 */
const axios = require('axios').default;
const querystring = require('querystring');


/**
 * custom modules
 */
const apiConfig = require('../config/api.config');

/**
 * axios instance for access token and refresh token request
 */
const token = axios.create({
  baseURL: apiConfig.TOKEN_BASE_URL,
  headers: {
    'Authorization': `Basic ${Buffer.from(apiConfig.CLIENT_ID + ':' + apiConfig.CLIENT_SECRET).toString('base64')}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

/**
 * axios instances for all API requests
 */
const api = axios.create({ baseURL: apiConfig.BASE_URL });


/**
 * Fetch data from an API using an access token for authentication. 
 * 
 * @param {string} apiUrl - The URL of the API to request data from.
 * @param {string} access_token - The access token used for authentication.
 * @returns {Promise} - Returns a promise that resolves to the data returned by the API.
 */

const  getData = async (apiUrl, access_token) => {
  try{
    const /** {Promise} */ response = await api.get(apiUrl, {
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    });
    return response;
  } catch (err) {
    console.log(err);
  }

}

module.exports = {
  token,
  getData
}

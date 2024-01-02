/**
 * @license Apache-2.0
 * @copyright bassu 2024
 */

'use strict';

/**
 * custom modules
 */
const { getData } = require('../config/axios.config');
const apiConfig = require('../config/api.config');

/**
 * Get Spotify catalog information for several artists on their Spotify IDs
 * 
 * @param {Object} req - server request object
 * @param {string} artistIds - A comma-separated list of the spotify IDs for the artists Maximum: 50 IDs
 * @returns {Object}
 */
const getSeveralDetail = async (req, artistIds) => {
  const { data: tractArtists } = await getData(`/artists?ids=${artistIds}`, req.cookies.access_token);

  return tractArtists;
}


module.exports = { getSeveralDetail }
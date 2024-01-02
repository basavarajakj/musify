/**
 * @license Apache-2.0
 * @copyright bassu 2024
 */

'use strict';

/**
 * custom modules
 */
const { getData } = require('../config/axios.config');
const { getUrlQuery } = require('../utils/helpers.util');

/**
 * Get a list of new album release featured in Spotify
 * 
 * @param {object} req - server request object 
 * @param {number} itemLimit - the maximum number of items. default: 30
 */
const getNewRelease = async (req, itemLimit) => {
  const { limit, offset, page } = getUrlQuery(req.params, itemLimit);

  const { data: { albums: newRelease } } = await getData(`/browse/new-releases?limit=${limit}&offset=${offset}`, req.cookies.access_token);

  return { baseUrl: req.baseUrl, page, ...newRelease }
}


module.exports = {
  getNewRelease
}

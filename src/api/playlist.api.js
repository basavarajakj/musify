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
 * Get a list of Spotify playlists
 * 
 * @param {Object} req - server request object
 * @param {number} itemLimit - the maximum number of items to return. default: 30
 * @returns {Object}
 */
const getFeatured = async (req, itemLimit) => {
  const { offset, limit, page } = getUrlQuery(req.params, itemLimit);

  const { data: featuredPlaylist } = await getData(`/browse/featured-playlists?limit=${itemLimit}&offset=${offset}`, req.cookies.access_token);

  return { baseUrl: req.baseUrl, page, ...featuredPlaylist};
}

const getCategoryPlaylist = async (req, itemLimit) => {
  const {offset, limit, page } = getUrlQuery(req.params, itemLimit);
  const { categoryId = 'toplists' } = req.params;

  const { data: catPlaylist } = await getData(`/browse/categories/${categoryId}/playlists?limit=${limit}&offset=${offset}`, req.cookies.access_token);

  const /** {string} */ baseUrl = `${req.baseUrl}/${categoryId}`

  return { baseUrl, page, ...catPlaylist };
}
module.exports = {
  getFeatured,
  getCategoryPlaylist,
}
/**
 * @license Apache-2.0
 * @copyright bassu 2024
 */

'use strict';


/**
 * custom modules
 */
const { getData } = require('../config/axios.config');

/**
 * Recommendation are generated based on the available information for a given seeds entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details. 
 * @param {object} req - server request object
 * @param {object} trackSeed - object of artist or tack seed string
 * @param {number} itemLimit - the maximum number of items to return. default: 30
 */
const getRecommendedTrack = async (req, trackSeed, itemLimit) => {
  const { data: { tracks: recommendedTracks } } = await getData(`/recommendations?seed_tracks=${trackSeed}&limit=${itemLimit}`, req.cookies.access_token);

  return recommendedTracks;
}

module.exports = { getRecommendedTrack }
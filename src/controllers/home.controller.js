/**
 * @license Apache-2.0
 * @copyright bassu 2024
 */

'use strict';


/**
 * custom modules
*/
const apiConfig = require('../config/api.config');
const userApi = require('../api/user.api');
const playerApi = require('../api/player.api');
const trackApi = require('../api/track.api');
const artistApi = require('../api/artist.api');
const albumApi = require('../api/album.api');
const playListApi = require('../api/playlist.api');


const home = async (req, res) => {

  // current user profile
  const currentProfile = await userApi.getProfile(req);

  // recently played tracks
  const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
  const recentlyPlayedTracks = recentlyPlayed.items.map(({ track}) => track);

  //recommended albums
  const trackIds = recentlyPlayedTracks.map(({ id }) => id);
  const trackSeed = trackIds.slice(0, 5).join(',');
  const recommendedAlbums = await trackApi.getRecommendedTrack(req, trackSeed, apiConfig.LOW_LIMIT);


  // recommended artists
  const artistIdEntries = recommendedAlbums.map((track) => track.artists.map(artist => artist.id));
  const uniqueArtistIds = [...new Set(artistIdEntries.flat(1))].join(',')
  const recommendedArtists = await artistApi.getSeveralDetail(req, uniqueArtistIds);

  // new release albums
  const newRelease = await albumApi.getNewRelease(req, apiConfig.LOW_LIMIT);

  // featured playlist
  const featuredPlaylists = await playListApi.getFeatured(req, apiConfig.LOW_LIMIT);
  res.render('./pages/home', {
    currentProfile,
    recommendedAlbums,
    recommendedArtists,
    newRelease,
    featuredPlaylists
  });
}

module.exports = { home }
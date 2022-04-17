const axios = require('axios');

const { getSpotifyAccessToken } = require('../auth');

const playlistsIds = {
  'party': '37i9dQZF1DXaXB8fQg7xif',
  'pop': '37i9dQZF1DX1ngEVM0lKrb',
  'rock': '37i9dQZF1EQpj7X7UK8OOF',
  'classic': '37i9dQZF1DWWEJlAGA9gs0'
}

const getPlaylistIdByTemperature = (temperature) => {
  if (temperature > 30) {
    return playlistsIds.party;
  } else if (temperature > 14) {
    return playlistsIds.pop;
  } else if (temperature > 9) {
    return playlistsIds.rock;
  } else {
    return playlistsIds.classic;
  }
}

const getPlaylistByTemperature = async (temperature) => {
  try {
    const token = await getSpotifyAccessToken();
    const playlistId = getPlaylistIdByTemperature(temperature);
    const { data } = await axios(`https://api.spotify.com/v1/playlists/${playlistId}`, {
      headers: {'Authorization' : 'Bearer ' + token},
      method: 'GET'
    })
    
    return data.tracks.items;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

module.exports = {
  getPlaylistByTemperature
}
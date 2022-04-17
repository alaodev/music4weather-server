const axios = require('axios');

const getSpotifyAccessToken = async () => {
  try {
    const result = await axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization' : 'Basic ' + btoa(process.env.SPOTIFY_CLIENT_ID + ':' + process.env.SPOTIFY_CLIENT_SECRET)      
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
    if (result?.status === 200) {
      return result.data.access_token;
    }
  } catch(e) {
    console.error(e);
    throw e;
  }
}

module.exports = {
  getSpotifyAccessToken
}
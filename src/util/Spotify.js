let userAccessToken = '';
const clientID = `${process.env.REACT_APP_SPOTIFY_API_KEY}`;
const redirectURI = "http://localhost:3000/callback/";

let Spotify = {
  getAccessToken() {
    if (userAccessToken) {
      return userAccessToken;
    }
    // check for access token match
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      userAccessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      // clear paramenter from url after token expiration
      window.setTimeout(() => userAccessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return userAccessToken;
    } else {
      const redirectURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      window.location = redirectURL;
    }
  },

  search(term) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?q=${term}&type=track`,
    {
      headers: {Authorization: `Bearer ${accessToken}`}
    })
    .then(response => response.json())
    .then((data) => {
      if (!data.tracks) {
        return [];
      }
      return data.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        URI: track.uri
      }));
    })
  }
};

export default Spotify;

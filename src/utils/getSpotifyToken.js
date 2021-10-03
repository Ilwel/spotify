const AUTH_URL = 'https://accounts.spotify.com/authorize';
const API_URL = 'https://api.spotify.com/v1/'
const scopes = ['playlist-read-private', 'user-read-currently-playing'];
const SCOPE_URL_PARAMS = scopes.join('%20');

const makeUrl = () => `${AUTH_URL}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=${SCOPE_URL_PARAMS}&response_type=token&show_dialog=true`;

const getParmsFromSpotifyAuth = (hash) => {

  const paramsStirng = hash.substring(1);
  const paramsInUrl = paramsStirng.split('&');
  const paramsObject = paramsInUrl.reduce((accumulater, curentValue) => {

    const [key, value] = curentValue.split('=');
    accumulater[key] = value;
    return accumulater;

  }, {});

  return paramsObject;

}

const makeUrlApi = (path) => `${API_URL}${path}`;

export {
  makeUrl,
  makeUrlApi,
  getParmsFromSpotifyAuth,
}
import { useEffect, useState } from "react";
import {

  BrowserRouter as Router,
  Route,
  Redirect

} from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import Home from "./pages/Home";
import Playlists from "./pages/Playlists";
import { getParmsFromSpotifyAuth } from "./utils/getSpotifyToken";


function RedirectPlaylists(props) {

  return (
    <>
      {!props.token ? props.children : <Redirect to="playlists" />}
    </>
  )

}

export default function Routes() {
  const [token, setToken] = useState('');
  const [tracks, setTracks] = useState({});

  useEffect(() => {
    if (window.location.hash) {
      const { access_token, token_type, expires_in } = getParmsFromSpotifyAuth(window.location.hash);
      localStorage.clear();
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("token_type", token_type);
      localStorage.setItem("token_expires_in", expires_in);
      setToken(access_token);
    }
  }, [])

  return (
    <AuthContext.Provider value={{ token, setToken, tracks, setTracks }}>
      <Router>
        <RedirectPlaylists token={token}>
          <Route path='/' exact component={Home} />
        </RedirectPlaylists>
        <Route path='/playlists' exact component={Playlists} />
      </Router>
    </AuthContext.Provider>
  )
}
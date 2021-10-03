import { useEffect, useState } from "react";
import {

  BrowserRouter as Router,
  Route,

} from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import Home from "./pages/Home";
import Playlists from "./pages/Playlists";
import { getParmsFromSpotifyAuth } from "./utils/getSpotifyToken";

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
        <Route path='/' exact component={Home} />
        <Route path='/playlists' exact component={Playlists} />
      </Router>
    </AuthContext.Provider>
  )
}
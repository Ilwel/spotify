import { makeUrl } from '../../utils/getSpotifyToken';
import Card from '../../styles/Card';
import Main from './Main';
import Line from '../../styles/Line';

export default function Home() {

  function handleLogin() {
    window.location = makeUrl();
  }

  return (
    <Main>
      <Card>
        <Line>
          <h1>Entre com sua conta spotify</h1>
          <button onClick={handleLogin} >Login Spotify</button>
        </Line>
      </Card>
    </Main>

  );
}
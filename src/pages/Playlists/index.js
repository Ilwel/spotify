import { useContext, useEffect, useState } from "react"
import AuthContext from "../../contexts/AuthContext";
import Card from "../../styles/Card";
import LayoutPlaylists from "./LayoutPlaylists";
import { makeUrlApi } from "../../utils/getSpotifyToken";
import Line from "../../styles/Line";
import ModalPlaylistDescription from "../../components/ModalPlaylistDescription";

export default function Playlists() {
  const { token, setTracks } = useContext(AuthContext);
  const [data, setData] = useState({});
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {

    async function handleGetPlaylists() {
      try {

        const res = await fetch(makeUrlApi('me/playlists'), {
          method: 'GET',
          headers: {
            'Authorization': "Bearer " + token,
          }
        });

        const resData = await res.json();
        setData(resData);

      } catch (error) {

        console.log(error.message);

      }

    }

    handleGetPlaylists();

  }, [token])

  useEffect(() => {

    const { items: spotifyItems } = data;
    setItems(spotifyItems)

  }, [data])

  async function handleCardClick(href, item) {

    const res = await fetch(href + '?limit=10', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })

    const { items: tracks } = await res.json();
    setTracks({ playlist: item, tracks });
    setOpen(true);

  }

  return (
    <>
      <LayoutPlaylists>
        {items?.map((item, index) => (
          <Card key={index} onClick={() => handleCardClick(item.tracks.href, item)}>
            <Line>
              <h1>{item.name.length < 30 ? item.name : item.name.substring(0, 30) + "..."}</h1>
              <img src={item.images[0].url} alt="" />
              <p>{item.owner.display_name}</p>
              <span>{item.tracks.total} músicas</span>
            </Line>
          </Card>
        ))}
      </LayoutPlaylists>
      <ModalPlaylistDescription open={open} setOpen={setOpen} />
    </>
  )

}
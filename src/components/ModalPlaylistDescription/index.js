import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import Card from "../../styles/Card";
import Modal from "../../styles/Modal";

export default function ModalPlaylistDescription(props) {
  const { tracks: { playlist, tracks } } = useContext(AuthContext);

  return (
    <>
      {props.open && (
        <Modal>
          <Card>
            <h1 className="close" onClick={() => props.setOpen(false)}>X</h1>
            <h1 className="title" >{playlist.name} - {playlist.owner.display_name}</h1>
            <img src={playlist.images[0].url} alt="" />
            <ul>
              {tracks.map(track => <li key={track.track.id}>
                <a href={track.track.external_urls.spotify} target="blank">
                  <h1>
                    {track.track.name.length < 45 ? track.track.name : track.track.name.substring(0, 45) + '...'}
                  </h1>
                </a>

              </li>)}
            </ul>
            <p>{playlist.description}</p>
          </Card>
        </Modal>
      )}
    </>
  )

}
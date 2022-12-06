import axios from "axios";
import React from "react";
import {DataGrid} from '@mui/x-data-grid';
import { Button } from '@mui/material';

const baseURL = "http://localhost:8081/api/getAll";

const columns = [
  { field: 'id',        headerName: 'ID',         width: 70 },
  { field: 'songName',  headerName: 'Song Name',  width: 230},
  { field: 'artist',    headerName: 'Artist',     width: 130},
  { field: 'albumName', headerName: 'Album Name', width: 230},
  { field: 'duration',  headerName: 'Duration',   width: 100, type: 'number'}
]

export default function DisplaySongs() {
  const [post, setPost] = React.useState(null);
  const [songs, setSongs] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  let rows = [];

    post.map((item) => {
        rows.push(
              {
                id        : item.albumId,
                duration  : item.duration,
                songName  : item.songName,
                albumName : item.albumName,
                artist    : item.artist
              })
    })

   const sendToYoutube = () => {
    console.log("clicked");
    const songsArray = ['hello', 'fellas in paris'] 
    console.log('hello');
    const Sendsongs = {'songs': songsArray}
    console.log('hello 2');
    axios
      .post('http://localhost:5001/api/playlist', Sendsongs)
      .then(res => console.log(res))
    console.log('hello 3');
  }

  return (
    <div>
      <div style={{ height: 800, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={rows.length}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
      <Button variant="contained" onClick={sendToYoutube}>Transfer</Button>
    </div>
    
  );
}
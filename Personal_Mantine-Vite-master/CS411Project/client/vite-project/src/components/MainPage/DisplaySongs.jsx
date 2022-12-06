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
  const [selectionModel, setSelectionModel] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  let rows = [];
    post.map((item, index) => {
        rows.push(
              {
                id        : item.albumId,
                duration  : item.duration,
                songName  : item.songName,
                albumName : item.albumName,
                artist    : item.artist,
                key       : index
              }
               )
        
    })

    let songsList = []
    rows.map((item) => songsList.push(item.songName) )
    console.log(songsList)

   const sendToYoutube = (songsList) => {
    // console.log("clicked");
    // const songsArray = ['hello', 'fellas in paris'] 
    // console.log('hello');
    const Sendsongs = {'songs': songsList}
    // console.log('hello 2');
    axios
      .post('http://localhost:5001/api/playlist', Sendsongs)
      // .then(res => console.log(res))
    // console.log('hello 3');
  }

  return (
    <div>
      <div style={{ height: 800, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          onSelectionModelChange={(newSelection) => {
            setSelectionModel(newSelection.selectionModel);
          }}
          selectionModel={selectionModel}
          getRowId={(row) => row.key}
        />
      </div>
      {selectionModel && selectionModel.map((val) => (
        <h1>{val}</h1>
      ))}
      <Button variant="contained" onClick={sendToYoutube}>Transfer</Button>
    </div>
    
  );
}
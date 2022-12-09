import axios from "axios";
import React from "react";
import {DataGrid} from '@mui/x-data-grid';
import { Button } from '@mui/material';


const baseURL = "http://localhost:8081/api/getAll";

const columns = [
  { field: 'songName',  headerName: 'Title',  width: 230},
  { field: 'artist',    headerName: 'Artist',     width: 130},
  { field: 'albumName', headerName: 'Album', width: 230},
  { field: 'duration',  headerName: 'Duration',   width: 100 },
  { field: 'id',        headerName: 'ID',         width: 215 },
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
                duration  : item.duration,
                songName  : item.songName,
                albumName : item.albumName,
                artist    : item.artist,
                key       : index,
                id        : item.albumId,
              }
               )
        
    })

    let songsList = []
    rows.map((item) => songsList.push(item.songName) )
    const final = {'songs': songsList};


   const sendToYoutube = () => {
    axios
      .post('http://localhost:5001/api/playlist', final)
      .then(res => console.log(res))
    // console.log('hello 3');
  }

  return (
    <div>
      <div style={{ height: 450, width: '100%' }}>
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
          sx={{
            backgroundColor: "#191414",
            color:"#fff",
            '& .MuiDataGrid-cell:hover': {
              color: '#1DB954',
            },
            borderColor: "#191414",
          }} 
        />
      </div>
      {selectionModel && selectionModel.map((val) => (
        <h1 style={{color:"white"}}>{val}</h1>
      ))}
      <Button variant="contained" onClick={sendToYoutube} style={{backgroundColor:"#1DB954", color: "#191414", fontWeight:700}}>Transfer</Button>
    </div>
    
  );
}
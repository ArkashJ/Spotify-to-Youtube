const fs = require('fs')
const SpotifyWebApi = require('spotify-web-api-node');
const token = "BQDVHzLdyz-fxC-ETyMOMyCOMD1GqNJN4nO53D0DrHIlYkCqe2PekMf7D0OsZXwEdW4LlZRvanVhefMMzP2ixDh6qlUsLeQXE9_ljnAzMhkEh6mYH3DmkoN3WC_qp4lERWNB9xTVF4AqxzLz84TmZTIXvWlfJmKn2EK5dYYKBUR8Tz4ETmr1C8o2SHyQIko8izm9VEKsBOJv4MKPiS25DWwWGqbaTACBr36XHKUNnMGUC0eLd2T5hkD-irKHY4lfbB31eObVnFoJjy8g6coZKPK1pwPsRNIRIbsS89Ux9NCtbKnbtGdSz50tPIODechgNh8ZCy8KpYnD99hxhwPam2B4";

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(token);

//GET MY PROFILE DATA
function getMyData() {
  (async () => {
    const me = await spotifyApi.getMe();
     console.log(me.body);
    getUserPlaylists(me.body.id);
  })().catch(e => {
    console.error(e);
  });
}

//GET MY PLAYLISTS
async function getUserPlaylists(userName) {
  const data = await spotifyApi.getUserPlaylists(userName)

  console.log("---------------+++++++++++++++++++++++++")
  let playlists = []

  for (let playlist of data.body.items) {
    console.log(playlist.name + " " + playlist.id)
    
    let tracks = await getPlaylistTracks(playlist.id, playlist.name);
    //console.log(tracks);

    const tracksJSON = { tracks }
    let data = JSON.stringify(tracksJSON);
    console.log(data)
    fs.writeFileSync(playlist.name+'.json', data);
  }
}

//GET SONGS FROM PLAYLIST
async function getPlaylistTracks(playlistId, playlistName) {

  const data = await spotifyApi.getPlaylistTracks(playlistId, {
    offset: 1,
    limit: 100,
    fields: 'items'
  })

  //.log('The playlist contains these tracks', data.body);
  // console.log('The playlist contains these tracks: ', data.body.items[0].track);
  // console.log("'" + playlistName + "'" + ' contains these tracks:');
   let tracks = [];

  for (let track_obj of data.body.items) {
    const track = track_obj.track
    tracks.push(track);
    console.log(track.name + " : " + track.artists[0].name)
  }
  
  console.log("---------------+++++++++++++++++++++++++")
  return tracks;
}

getMyData();
// const value = JSON.stringify(getMyData());
// console.log(value)
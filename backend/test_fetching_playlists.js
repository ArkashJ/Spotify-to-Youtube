const fs = require('fs')
const SpotifyWebApi = require('spotify-web-api-node');
const token = 'BQCig9dK9qZgRVVPdaln0ibonfM1WEkJjOUu2Ys_dJaBIiOGpAJ11760ImS3Zh6WaDPO0AUSWqSH5-xVDq_NKpuV7gmlYPN_rwegP73P8JG_xG3Fr6DHbVs4s-8HanEZniitAGq690JJEzBaS6_uqQcUKn2cwMDTtIbf3USOH211qL4XSnDyPJq1CcY8dBdzFWBIFHY5nZViTXT9-wUCaWG6u2bLvRW3oNEYuIu1jCwEq3lZp9oUIh5RtF3nmScdGSHJjJeQ_RyRAjPIBf0-d7bfzSInwIiCp8wek4KZm39zyKGLnuZneWg73a0W91eO4M0ruSmwG8VdkWWJmKyT';
console.log(token)

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
    // console.log(tracks);

    const tracksJSON = { tracks }
    let data = JSON.stringify(tracksJSON);
    fs.writeFileSync('./fetched_playlists/'+playlist.name+'.json', data);
  }
}

//GET SONGS FROM PLAYLIST
async function getPlaylistTracks(playlistId, playlistName) {

  const data = await spotifyApi.getPlaylistTracks(playlistId, {
    offset: 1,
    limit: 100,
    fields: 'items'
  })

  // console.log('The playlist contains these tracks', data.body);
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
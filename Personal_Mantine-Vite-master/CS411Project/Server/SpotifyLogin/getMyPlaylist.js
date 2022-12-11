const SpotifyWebApi = require('spotify-web-api-node');
const express = require('express');
require("dotenv").config()
const fs = require("fs");

const loginRoute = express.Router()


const scopes = [
  'ugc-image-upload',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'streaming',
  'app-remote-control',
  'user-read-email',
  'user-read-private',
  'playlist-read-collaborative',
  'playlist-modify-public',
  'playlist-read-private',
  'playlist-modify-private',
  'user-library-modify',
  'user-library-read',
  'user-top-read',
  'user-read-playback-position',
  'user-read-recently-played',
  'user-follow-read',
  'user-follow-modify'
];

const spotifyApi = new SpotifyWebApi({
  redirectUri: 'http://localhost:8081/login/callback',
  clientId: process.env.clientId,
  clientSecret: process.env.clientSecret
});



loginRoute.get('/', (req, res) => {
  res.redirect(spotifyApi.createAuthorizeURL(scopes));
});


loginRoute.get('/callback', (req, res) => {
  const error = req.query.error;
  const code = req.query.code;
  const state = req.query.state;

  if (error) {
    console.error('Callback Error:', error);
    res.send(`Callback Error: ${error}`);
    return;
  }
  
  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      const access_token = data.body['access_token'];
      const refresh_token = data.body['refresh_token'];
      const expires_in = data.body['expires_in'];
      spotify_access_token = data.body.access_token;

      const save_token = JSON.stringify(access_token)
      fs.writeFileSync("token.json", save_token);
      
      spotifyApi.setAccessToken(access_token);
      spotifyApi.setRefreshToken(refresh_token);

      console.log('access_token:', access_token);
      console.log('refresh_token:', refresh_token);
     
      console.log(
        `Sucessfully retreived access token. Expires in ${expires_in} s.`
      );
      res.redirect("http://localhost:5173/")
      
      setInterval(async () => {
        const data = await spotifyApi.refreshAccessToken();
        const access_token = data.body['access_token'];

        console.log('The access token has been refreshed!');
        console.log('access_token:', access_token);
        spotifyApi.setAccessToken(access_token);
      }, expires_in / 2 * 1000);
      
      spotifyApi.setAccessToken(access_token);

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
        let playlist = []
      
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
    
    }
    )
    .catch(error => {
      console.error('Error getting Tokens:', error);
      res.send(`Error getting Tokens: ${error}`);
    });
});

module.exports = loginRoute;
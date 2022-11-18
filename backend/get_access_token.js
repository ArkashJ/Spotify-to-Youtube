/**
 * This example is using the Authorization Code flow.
 *
 * In root directory run
 *
 *     npm install express
 *
 * then run with the followinng command. If you don't have a client_id and client_secret yet,
 * create an application on Create an application here: https://developer.spotify.com/my-applications to get them.
 * Make sure you whitelist the correct redirectUri in line 26.
 *
 *     node access-token-server.js "<Client ID>" "<Client Secret>"
 *
 *  and visit <http://localhost:8888/login> in your Browser.
 */
 var SpotifyWebApi = require('spotify-web-api-node');
 const express = require('express');
 const fs = require('fs')
 
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
 
 var spotifyApi = new SpotifyWebApi({
  clientId: '6e2768f493b44685830d71e6ba0dd4cf',
  clientSecret: 'f30a7efc365042f685527a235ec97795',
  redirectUri: 'http://localhost:8080/callback'
 });
 
 const app = express();
 var token =""
 
 app.get('/login', (req, res) => {
   res.redirect(spotifyApi.createAuthorizeURL(scopes));
 });
 
 app.get('/callback', (req, res) => {
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

       // save the token for use in other files
       
       const save_token = JSON.stringify(access_token);
 
       spotifyApi.setAccessToken(access_token);
       spotifyApi.setRefreshToken(refresh_token);
 
       console.log('access_token:', access_token);
       console.log('refresh_token:', refresh_token);
 
       console.log(
         `Sucessfully retreived access token. Expires in ${expires_in} s.`
       );
       res.send('Success! You can now close the window.');
 
       setInterval(async () => {
         const data = await spotifyApi.refreshAccessToken();
         const access_token = data.body['access_token'];
 
         console.log('The access token has been refreshed!');
         console.log('access_token:', access_token);
         spotifyApi.setAccessToken(access_token);
       }, expires_in / 2 * 1000);
     })
     .catch(error => {
       console.error('Error getting Tokens:', error);
       res.send(`Error getting Tokens: ${error}`);
     });
 });
 
 app.listen(8080, () =>
   console.log(
     'HTTP Server up. Now go to http://localhost:8080/login in your browser.'
   )
 );
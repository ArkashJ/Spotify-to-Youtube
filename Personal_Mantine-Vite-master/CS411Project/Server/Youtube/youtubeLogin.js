const YOUTUBE_Data = require("./data")

var GoogleAuth;

const scopes = [
    'https://www.googleapis.com/auth/youtube.upload',
    'https://www.googleapis.com/auth/youtube.force-ssl',
    'https://www.googleapis.com/auth/youtube',
    'https://www.googleapis.com/auth/youtubepartner',
    'https://www.googleapis.com/auth/youtube.upload'
]

function initClient() {
    gapi.client.init({
        'apiKey'        : YOUTUBE_Data.API,
        'clientId'      : YOUTUBE_Data.clientId,
        'scope'         : scopes, 
        'discoveryDocs' : ['https://www.googleapis.com/youtube/v3/playlists', 'https://www.googleapis.com/youtube/v3/search' ]
    })
}
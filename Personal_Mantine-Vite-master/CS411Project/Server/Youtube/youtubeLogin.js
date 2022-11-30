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
    }).then(function () {
        GoogleAuth = gapi.auth2.getAuthInstance();
  
        // Listen for sign-in state changes.
        GoogleAuth.isSignedIn.listen(updateSigninStatus);
    });
}

var isAuthorized;
var currentApiRequest;

function sendAuthorizedApiRequest(requestDetails) {
    currentApiRequest = requestDetails;
    if (isAuthorized){
        gapi.client.request(requestDetails);
        currentApiRequest = {}
    }
}
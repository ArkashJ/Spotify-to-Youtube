import { gapi } from 'gapi-script';
import {useEffect, useState} from "react";

function execute() {
    return gapi.client.youtube.playlists.insert({
      "part": [
        "snippet"
      ],
      "resource": {
        "snippet": {
          "title": "New Spotify Playlist"
        }
      }
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "YOUR_CLIENT_ID"});
  });
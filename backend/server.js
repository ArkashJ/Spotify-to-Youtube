/* Load the HTTP library */
var http = require('http');

const express = require("express");
const { response } = require('express');
const axios = require('axios');
const { nextTick } = require('process');
const app = express();
const port = 8800;
const APIkey = "AIzaSyDgPCmpEvEZBkeEqVvliN0g_ZkqRWzfe4c";
const firstPartOfURL = "https://www.googleapis.com/youtube/v3";

// this is the full search rideirect link
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyDgPCmpEvEZBkeEqVvliN0g_ZkqRWzfe4c&type=video&part=snippet&q=queryname

app.get("/", (request, response) => {
  response.send("testing home page");
});

app.get("/search", async (request, response, next) => {
  try {
  const searchQuery = request.query.search_query;
  const url = `${firstPartOfURL}/search?key=${APIkey}&type=video&part=snippet&q=${searchQuery}`;
  const searchResponse = await axios.get(url);
  const titles = searchResponse.data.items.map((item) => item.snippet.title);
  // check what we are getting back
  response.send(titles);
  console.log("searched for", searchQuery);
  } catch (err) {
    next(err)
  }
});

const Artists = ["Tool", "Three Days Grace", "Metallica"]
const Songs = ["Lateralus", "Drown", "Enter Sandman"]

for (let i = 0; i < Artists.length; i++) {
  Request = Artists[i] + " " + Songs[i];
  console.log(Request);
};

app.listen(port, () => {
  console.log("app started successfully");
});
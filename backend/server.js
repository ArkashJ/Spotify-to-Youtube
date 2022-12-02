/* Load the HTTP library */
var http = require('http');

const express = require("express");
const { response } = require('express');
const app = express();
const port = 8800;

// this is the search rideirect link
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyDgPCmpEvEZBkeEqVvliN0g_ZkqRWzfe4c&type=video&part=snippet&q=queryname

app.get("/", (request, response) => {
  response.send("testing home page");
});

app.get("/search", (request, response) => {
  const searchQuery = request.query.search_query;
  // test sending back the request
  response.send(searchQuery);
})

app.listen(port, () => {
  console.log("app started successfully");
});
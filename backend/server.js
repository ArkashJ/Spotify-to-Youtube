/* Load the HTTP library */
var http = require('http');

const express = require("express");
const { response } = require('express');
const app = express();
const port = 8800;

app.get("/", (request, response) => {
  response.send("testing home page");
});

app.listen(port, () => {
  console.log("app started successfully");
});
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Starts server
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
})
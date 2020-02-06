const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//get request for html
// app.get("/notes", function(req, res) {
//     res.sendFile(path.join(path.join(__dirname, "/public"), "notes.html"));
// });

// app.get("*", function(req, res) {
//     res.sendFile(path.join(path.join(__dirname, "/public"), "index.html"));
// });

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});



//Starts server
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
})
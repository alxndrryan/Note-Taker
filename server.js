const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//get requests for api routes
app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));
});

//get requests for html routes

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

//post request to save notes
app.post("/api/notes", function(req, res) {
    let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let newNote = req.body;
    let uniqueID = (notes.length).toString();
    newNote.id = uniqueID;
    notes.push(newNote);

    fs.writeFileSync("./db/db.json", JSON.stringify(notes));
    console.log("New note saved to database! Content: ", newNote);
    res.json(notes);
})





//Starts server
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
})
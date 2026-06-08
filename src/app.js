// This Folder work for server create

// 1 - first require express
const express = require("express");

// 2 - instance save in variable
const app = express();

// 5 - midleware for frontend data read in backend body
app.use(express.json())

// save note array
const notes = []

// 4 - (POST API) create new data in database
app.post("/notes", (req, res) => {
    notes.push(req.body)

    res.status(201).json({
        message: "note created successfully"
    })
})

// 5 - (GET API) show data
app.get("/notes", (req, res) => {

    res.status(200).json({
        message: "notes fetched successful.",
        notes: notes
    })
})

// 06 - (DELETE API) delete/notes/3 (:dynamic)
app.delete('/notes/:index', (req, res) => {

    const index = req.params.index
    delete notes[index]

    res.status(200).json({
        message: "note deleted successfully"
    })

})

// 07 - (PATCH API) database data update
app.patch("/notes/:index", (req, res) => {
    const index = req.params.index
    const description = req.body.description

    notes[index].description = description

    res.status(200).json({
        message: "note updated successfully"
    })
})

// 3 - export
module.exports = app
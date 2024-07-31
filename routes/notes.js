const { log } = require("console")
const { Router } = require("express")
const fs = require("fs/promises")
const path = require("path")

const db = fs.readFile(path.join(__dirname, "db/db.json"), { encoding: "utf-8" })

const notes = Router()

notes.get("/", (req, res) => {
    console.log("getting all notes...");
    console.log({
        req, res
    }); 

    if (!db) {
        res.status(400).send("Cannot get notes!")
    }
}) 









module.exports = notes
import express from "express";
import RemoveBackground from "remove-bg-node";
import bodyParser from "body-parser";
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 5500;




app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs",{})
});

app.post("/submit", async(req, res) => {
 try {
  'use strict'
    let rm = new RemoveBackground();
    let current = __dirname + '/teste/cristian.jpg';
    let save = __dirname + '/deploy';
    await rm.asyncRemoveBackground(current,save)

} catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }

});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
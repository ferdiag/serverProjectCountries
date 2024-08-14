const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

const getAndUpdateLeaderboard = require("./controllers/getAndUpdateLeaderboardController.js");
const initController = require("./controllers/initController.js");
require("dotenv").config();

app.use(express.json());
app.use(cors());

// Gibt die Daten aus data.js als JSON zurück
app.get("/", (req, res) => {
  initController(req, res);
});

// Fügt neuen Highscore hinzu und verwaltet die Top 10 Highscores
app.post("/getAndUpdateLeaderboard", async (req, res) => {
  getAndUpdateLeaderboard(req, res);
});

// Startet den Server auf Port 3001
app.listen(process.env.PORT || port, async () => {
  console.log(`Server läuft auf Port ${port}`);
});
module.exports = app;

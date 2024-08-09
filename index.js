const express = require("express");
const app = express();
const port = 3001;
const data = require("./data/data.js");
const cors = require("cors");
const connectDatabase = require("./helpers/connect.js");
const updateLeaderboard = require("./controllers/Leaderboard.js");

app.use(express.json());
app.use(cors());
let db;

// Gibt die Daten aus data.js als JSON zurück
app.get("/", (req, res) => {
  res.json(data);
});

// Fügt neuen Highscore hinzu und verwaltet die Top 10 Highscores
app.post("/getAndUpdateLeaderboard", async (req, res) => {
  const data = req.body;

  if (!db) {
    db = await connectDatabase(res);
    if (db === null) {
      res.sendStatus(500).send("Verbindung zur Datenbank gescheitert");
      return;
    }
  }
  const collection = await db.collection("highscore");

  //setzen eines eventuellen Fehlers beim update, ansonsten wird undefinded wieder gegeben
  const isUpdateSucessful =
    req.body.name != (await updateLeaderboard(data, collection));

  try {
    const allEntries = await collection.find({}).toArray();

    res.send({
      leaderboard: allEntries,
      err: isUpdateSucessful
        ? false
        : "Es gab leider einen Fehler beim updaten der Datenbank",
    });
  } catch {
    res.status(500).send("Fehler in der Datenbank");
  }
});

// Startet den Server auf Port 3001
app.listen(port, async () => {
  console.log(`Server läuft auf Port ${port}`);
});

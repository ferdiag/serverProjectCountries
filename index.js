const express = require("express");
const app = express();
const port = 3001;
const data = require("./data/data.js");
const cors = require("cors");
const connectDatabase = require("./helpers/connect.js");

app.use(express.json());
app.use(cors());
let db;

app.get("/", (req, res) => {
  res.json(data);
});

app.post("/updateHighscore", async (req, res) => {
  const data = req.body;
  try {
    if (!db) {
      db = await connectDatabase();
      !db && res.sendStatus(500).send("Verbindung zur Datenbank gescheitert");
    }
    const collection = await db.collection("highscore");

    await collection.insertOne(data);

    const count = await collection.countDocuments();
    const allEntries = await collection.find({}).toArray();
    console.log(allEntries, count);
    //sicherstellen, dass es nur 10 Einträge gibt

    count > 10 &&
      (await collection.findOneAndDelete({}, { sort: { points: 1 } }));
    const allEntries2 = await collection.find({}).toArray();
    console.log("updatedListe", allEntries2);
  } catch {
    res.status(500).send("Fehler in der Datenbank");
    return;
  }

  res.send("Bestenliste aktualisiert");
});

app.listen(port, async () => {
  console.log(`Server läuft auf Port ${port}`);
});

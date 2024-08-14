const updateLeaderboard = require("../helpers/Leaderboard");
const connectDatabase = require("../utils/connect");

const getAndUpdateLeaderboard = async (req, res) => {
  let db;
  let client;
  const data = req.body;

  if (!db) {
    [db, client] = await connectDatabase(res);
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
  } finally {
    client.close();
  }
};
module.exports = getAndUpdateLeaderboard;

/**
 * Aktualisiert die Bestenliste und ruft die aktualisierten Daten der Bestenliste ab.
 *
 * Diese Funktion verarbeitet die Anfrage zur Aktualisierung der Bestenliste in der Datenbank
 * und ruft anschließend die aktualisierten Einträge der Bestenliste ab, die nach Punkten
 * in absteigender Reihenfolge sortiert sind. Falls ein Fehler bei der Datenbankverbindung
 * oder -operation auftritt, werden entsprechende Fehlermeldungen an den Client gesendet.
 *
 * @author Ferhat Agostinis
 *
 * @param {Object} req - Das Anfrageobjekt vom Client.
 * @param {Object} req.body - Der Body der Anfrage, der die zu aktualisierenden Daten enthält.
 * @param {Object} req.body.name - Der Name des Spielers, der in der Bestenliste aktualisiert werden soll.
 * @param {Object} res - Das Antwortobjekt, um Daten oder Fehlermeldungen an den Client zu senden.
 *
 * @returns {Promise<void>} Sendet die aktualisierte Bestenliste oder eine Fehlermeldung in der Antwort.
 */
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
  console.log(data.name);

  // Setzen eines eventuellen Fehlers beim Update, ansonsten wird undefined zurückgegeben
  const isUpdateSuccessful =
    data.name && (await updateLeaderboard(data, collection));

  try {
    const allEntries = await collection.find({}).sort({ points: -1 }).toArray();
    res.send({
      leaderboard: allEntries,
      err: isUpdateSuccessful
        ? false
        : "Es gab leider einen Fehler beim Updaten der Datenbank",
    });
  } catch {
    res.status(500).send("Fehler in der Datenbank");
  } finally {
    client.close();
  }
};

module.exports = getAndUpdateLeaderboard;

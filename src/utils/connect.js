/**
 * Stellt eine Verbindung zur MongoDB-Datenbank her.
 *
 * Diese Funktion verbindet sich mit der MongoDB-Datenbank unter Verwendung der in den Umgebungsvariablen
 * definierten URI und Datenbanknamen. Im Erfolgsfall wird die Datenbank und der Client zurückgegeben.
 * Im Fehlerfall wird ein Fehler zurückgegeben.
 *
 * @author Ferhat Agostinis
 *
 * @param {Object} res - Das Antwortobjekt, das für das Senden von Fehlermeldungen verwendet werden kann.
 *
 * @returns {Promise<Array|String>} Gibt ein Array mit der Datenbank und dem Client zurück, oder den String "error" bei einem Verbindungsfehler.
 */
const { MongoClient } = require("mongodb");
require("dotenv").config();

const connectDatabase = async (res) => {
  try {
    // Verbindung zur MongoDB herstellen
    const client = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Auswahl der Datenbank
    const db = client.db(process.env.DATABASE_NAME);

    // Rückgabe der Datenbank und des Clients
    return [db, client];
  } catch (error) {
    // Bei einem Verbindungsfehler "error" zurückgeben
    return "error";
  }
};

module.exports = connectDatabase;

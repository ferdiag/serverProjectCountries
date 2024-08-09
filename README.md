Leaderboard API

Dies ist eine einfache Node.js-API, die mit Express.js entwickelt wurde. Die API verwaltet eine Bestenliste (Leaderboard) für ein Spiel, speichert Highscores und stellt sicher, dass nur die Top 10 Einträge in der Datenbank gespeichert werden.
Installation
Voraussetzungen

    Node.js und npm müssen auf Ihrem System installiert sein.
    Eine MongoDB-Instanz muss entweder lokal oder in der Cloud verfügbar sein.

Schritte zur Installation

    Repository klonen:

    bash

git clone https://github.com/ferdiag/serverProjectCountries
cd serverProjectCountries

Abhängigkeiten installieren:

Führen Sie diesen Befehl im Stammverzeichnis des Projekts aus, um die benötigten Node.js-Pakete zu installieren:

bash

npm install

Starten einer MongoDB-Instanz:

Stellen Sie sicher, dass MongoDB auf Ihrem Computer oder Server läuft. Wenn Sie Docker verwenden möchten, können Sie MongoDB mit diesem Befehl starten:

bash

docker run --name mongodb -p 27017:27017 -d mongo:latest

Server starten:

Starten Sie den Express-Server mit folgendem Befehl:

bash

    node index.js

    Der Server läuft standardmäßig auf Port 3001.

API-Endpunkte
GET /

Gibt die statischen Daten aus der Datei data/data.js als JSON zurück.

Beispielantwort:

json

{
  "message": "Hallo, das sind die Daten aus data.js"
}

POST /getAndUpdateLeaderboard

Fügt einen neuen Highscore hinzu und verwaltet die Top 10 Highscores. Wenn mehr als 10 Einträge vorhanden sind, wird der niedrigste Highscore entfernt.

Anfrage:

    URL: /getAndUpdateLeaderboard
    Methode: POST
    Body: JSON-Objekt, das den Highscore enthält.

Beispiel-Request-Body:

json

{
  "name": "Player1",
  "points": 1000
}

Beispielantwort:

json

{
  "leaderboard": [
    { "name": "Player1", "points": 1000 },
    ...
  ],
  "err": false
}

    leaderboard: Die aktuelle Liste der Highscores.
    err: Gibt false zurück, wenn kein Fehler aufgetreten ist, oder eine Fehlermeldung, wenn das Update fehlgeschlagen ist.

Projektstruktur

    index.js: Die Hauptdatei, die den Express-Server konfiguriert und die API-Endpunkte definiert.
    data/data.js: Eine Datei, die statische JSON-Daten enthält, die von der API zurückgegeben werden.
    helpers/connect.js: Eine Datei, die die Funktion zur Verbindung mit der MongoDB-Datenbank enthält.
    controllers/Leaderboard.js: Eine Datei, die die Logik zur Verwaltung des Leaderboards enthält, wie das Hinzufügen neuer Highscores und das Löschen des niedrigsten Eintrags, wenn mehr als 10 Einträge vorhanden sind.

Beispiel für helpers/connect.js

Diese Datei stellt die Verbindung zur MongoDB-Datenbank her:

javascript

const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017"; // Passen Sie diese URI nach Bedarf an
const dbName = "highscoreDB"; // Name der Datenbank

async function connectDatabase() {
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  try {
    await client.connect();
    return client.db(dbName);
  } catch (error) {
    console.error("Verbindung zur Datenbank fehlgeschlagen:", error);
    return null;
  }
}

module.exports = connectDatabase;

Beispiel für controllers/Leaderboard.js

Die Datei Leaderboard.js enthält die Logik zum Verwalten der Highscores:

javascript

const updateLeaderboard = async (data, collection) => {
  try {
    await collection.insertOne(data);

    // Löscht den niedrigsten Highscore, falls mehr als 10 Einträge vorhanden sind
    const count = await collection.countDocuments();
    if (count > 10) {
      await collection.findOneAndDelete({}, { sort: { points: 1 } });
    }
    return true;
  } catch (error) {
    console.error("Fehler beim Aktualisieren des Leaderboards:", error);
    return false;
  }
};

module.exports = updateLeaderboard;

Fehlersuche

    Verbindung zur Datenbank gescheitert:
        Stellen Sie sicher, dass MongoDB läuft und die Verbindungsdetails in connect.js korrekt sind.
    Fehler beim Abrufen der Highscores:
        Überprüfen Sie, ob die MongoDB-Sammlung highscore korrekt erstellt wurde und ob die Datenbankverbindung erfolgreich ist.

Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Weitere Informationen finden Sie in der LICENSE-Datei.

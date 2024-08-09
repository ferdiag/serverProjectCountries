Leaderboard API

Dies ist eine einfache Node.js-API, die mit Express.js entwickelt wurde. Die API verwaltet eine Bestenliste (Leaderboard) für ein Spiel, speichert Highscores und stellt sicher, dass nur die Top 10 Einträge in der Datenbank gespeichert werden.
Installation

    Repository klonen:

    bash

git clone https://github.com/ferdiag/serverProjectCountries
cd serverProjectCountries

Abhängigkeiten installieren:

Stelle sicher, dass Node.js und npm installiert sind, und führe dann den folgenden Befehl aus:

bash

npm install

Starten einer lokalen MongoDB-Instanz:

Wenn du MongoDB lokal installiert hast, starte den MongoDB-Dienst. Alternativ kannst du MongoDB mit Docker starten:

bash

docker run --name mongodb -p 27017:27017 -d mongo:latest

Server starten:

Starte den Server mit dem folgenden Befehl:

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
  "err": null
}

    leaderboard: Die aktuelle Liste der Highscores.
    err: Gibt null zurück, wenn kein Fehler aufgetreten ist, ansonsten eine Fehlermeldung.

Struktur des Projekts

    index.js: Die Hauptdatei, die den Express-Server konfiguriert und die API-Endpunkte definiert.
    data/data.js: Eine Datei, die statische JSON-Daten enthält, die von der API zurückgegeben werden.
    helpers/connect.js: Eine Datei, die die Funktion zur Verbindung mit der MongoDB-Datenbank enthält.
    controllers/Leaderboard.js: Eine Datei, die die Logik zur Verwaltung des Leaderboards enthält, wie das Hinzufügen neuer Highscores und das Löschen des niedrigsten Eintrags, wenn mehr als 10 Einträge vorhanden sind.

Beispiel für controllers/Leaderboard.js

Die Datei Leaderboard.js könnte wie folgt aussehen:

javascript

const updateLeaderboard = async (data, collection) => {
  try {
    await collection.insertOne(data);

    // Löscht den niedrigsten Highscore, falls mehr als 10 Einträge vorhanden sind
    const count = await collection.countDocuments();
    if (count > 10) {
      await collection.findOneAndDelete({}, { sort: { points: 1 } });
    }

    return null; // Kein Fehler
  } catch (error) {
    return "Es gab leider einen Fehler beim Updaten der Datenbank";
  }
};

module.exports = updateLeaderboard;

Fehlersuche

    Verbindung zur Datenbank scheitert:
        Überprüfe, ob MongoDB läuft und die Verbindungsdetails in connect.js korrekt sind.
    Fehler beim Abrufen der Highscores:
        Überprüfe, ob die MongoDB-Sammlung highscore korrekt erstellt wurde und ob die Datenbankverbindung erfolgreich ist.

Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Weitere Informationen findest du in der LICENSE-Datei.

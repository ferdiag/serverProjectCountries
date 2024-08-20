/**
 * Hauptanwendung für den Express-Server.
 *
 * Diese Datei konfiguriert und startet den Express-Server, verwendet die Middleware für JSON und CORS,
 * und bindet den Haupt-Router ein. Der Server wird auf dem in der Umgebungsvariable definierten Port
 * oder auf Port 3001 gestartet.
 *
 * @author Ferhat Agostinis
 */

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const mainRouter = require("./routes/router"); // Pfad anpassen, falls nötig

// Middleware zum Parsen von JSON-Daten verwenden
app.use(express.json());

// Middleware für Cross-Origin Resource Sharing (CORS) verwenden
app.use(cors());

// Haupt-Router einbinden
app.use(mainRouter);

const port = process.env.PORT || 3001;

// Server starten und auf Anfragen warten
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});

module.exports = app;

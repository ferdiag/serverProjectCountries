const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const mainRouter = require("./routes/router"); // Pfad anpassen, falls nötig

app.use(express.json());
app.use(cors());

// Router verwenden
app.use(mainRouter);

const port = process.env.PORT || 3001;

// Server starten
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});

module.exports = app;

/**
 * Aktualisiert die Bestenliste, indem ein neuer Eintrag hinzugefügt wird.
 *
 * Diese Funktion fügt einen neuen Eintrag in die Bestenliste ein und stellt sicher,
 * dass die Bestenliste nicht mehr als 10 Einträge enthält, indem der Eintrag mit
 * dem niedrigsten Punktestand gelöscht wird, falls die Anzahl der Einträge 10 übersteigt.
 *
 * @author Ferhat Agostinis
 *
 * @param {Object} data - Die Daten des neuen Eintrags, die zur Bestenliste hinzugefügt werden sollen.
 * @param {Object} collection - Die Datenbankkollektion, die die Bestenliste enthält.
 *
 * @returns {Promise<boolean>} Gibt `true` zurück, wenn das Update erfolgreich war, andernfalls `false`.
 */
const updateLeaderboard = async (data, collection) => {
  try {
    // Neuen Eintrag zur Bestenliste hinzufügen
    await collection.insertOne(data);

    // Zählt die Anzahl der Einträge in der Bestenliste
    const count = await collection.countDocuments();

    // Löscht den niedrigsten Highscore, falls mehr als 10 Einträge vorhanden sind
    if (count > 10) {
      await collection.findOneAndDelete({}, { sort: { points: 1 } });
    }

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = updateLeaderboard;

const updateLeaderboard = async (data, collection) => {
  try {
    // Stellt eine Verbindung zur Datenbank her, falls nicht vorhanden

    await collection.insertOne(data);

    // Löscht den niedrigsten Highscore, falls mehr als 10 Einträge vorhanden sind
    const count = await collection.countDocuments();
    if (count > 10) {
      await collection.findOneAndDelete({}, { sort: { points: 1 } });
    }
    return null;
  } catch {
    return "Es gab leider einen Fehler beim updaten der Datenbank";
  }
};
module.exports = updateLeaderboard;

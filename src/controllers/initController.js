const data = require("../data/data.js");
const connectDatabase = require("../utils/connect.js");
const initController = async (req, res) => {
  let db;
  let client;

  if (!db) {
    [db, client] = await connectDatabase(res);
    const collection = await db.collection("highscore");
    const leaderboard = await collection.find({}).toArray();
    // const leaderboard = await collection.deleteMany({});

    res.json({ data, leaderboard });
  }
};
module.exports = initController;

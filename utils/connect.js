const { MongoClient } = require("mongodb");

const connectDatabase = async (res) => {
  const url = "mongodb://localhost:27017";
  const dbName = "mydatabase";
  try {
    const client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = client.db(dbName);
    return [db, client];
  } catch (error) {
    return "error";
  }
};
module.exports = connectDatabase;

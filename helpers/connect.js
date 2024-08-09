const { MongoClient } = require("mongodb");

const connectDatabase = async (res) => {
  const url = "mongodb://localhost:27017";
  const dbName = "mydatabase";
  try {
    const client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return (db = client.db(dbName));
  } catch (error) {
    return "error";
  }
};
module.exports = connectDatabase;

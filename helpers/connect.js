const { MongoClient } = require("mongodb");

const connectDatabase = async () => {
  const url = "mongodb://localhost:27017";
  const dbName = "mydatabase";
  try {
    const client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Verbunden mit MongoDB");
    return (db = client.db(dbName));
  } catch (error) {
    console.error(error);
  }
};
module.exports = connectDatabase;

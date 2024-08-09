const { MongoClient } = require("mongodb");
require("dotenv").config();

const connectDatabase = async (res) => {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = client.db(process.env.DATABASE_NAME);
    return [db, client];
  } catch (error) {
    return "error";
  }
};
module.exports = connectDatabase;

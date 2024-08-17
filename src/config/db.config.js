const mongoose = require("mongoose");
const { ATLAS_DB_URL, NODE_ENV } = require("./server.config");

async function connectToDB() {
  try {
    console.log("Attempting to connect to MongoDB...");
    if (NODE_ENV === "development") {
      await mongoose.connect(ATLAS_DB_URL, {
        serverSelectionTimeoutMS: 30000,
        socketTimeoutMS: 45000,
      });
      console.log("Successfully connected to MongoDB");
    }
  } catch (error) {
    console.error("Unable to connect to the DB server");
    console.error("Error details:", error);
  }
}

module.exports = connectToDB;

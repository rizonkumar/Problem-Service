const mongoose = require("mongoose");
const { ATLAS_DB_URL, NODE_ENV } = require("./server.config");

async function connectToDB() {
  try {
    if (NODE_ENV === "developement") {
      await mongoose.connect(ATLAS_DB_URL);
    }
  } catch (error) {
    console.error("Unable to connect to the DB server");
    console.error(error);
  }
}

module.exports = connectToDB;

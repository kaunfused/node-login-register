const mongoose = require("mongoose");

const connect = async (url) => {
  const data = {
    dbName: "blogdb",
  };

  try {
    await mongoose.connect(url, data);
    console.log("Connection with db established...");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;

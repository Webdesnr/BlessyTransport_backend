const config = require("config");
const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect(config.get("db"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connected to db: " + config.get("db")))
    .catch((err) => console.error(err));
};

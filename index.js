const express = require("express");
require("express-async-errors");
const app = express();
const config = require("config");

require("./startup/prod")(app);
require("./startup/db")();
require("./startup/routes")(app);

const port = config.get("port") || 5000;
const server = app.listen(port, () => {
  console.log("Listening to the port: " + port);
});

module.exports = server;

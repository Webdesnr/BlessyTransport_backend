const express = require("express");
require("express-async-errors");
const app = express();

require("./startup/db")();
require("./startup/routes")(app);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening to the port: " + port));

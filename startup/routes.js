const express = require("express");
const quote = require("../routes/quote");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/quote", quote);
};

const { Quote, validateQuote } = require("../model/quote");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { error } = validateQuote(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const quote = new Quote({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    from: req.body.from,
    to: req.body.to,
  });

  await quote.save();

  res.send(quote);
});

module.exports = router;

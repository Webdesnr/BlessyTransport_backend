const mongoose = require("mongoose");
const Joi = require("joi");

const Quote = mongoose.model(
  "Quote",
  new mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    from: String,
    to: String,
  })
);

function validateCustomer(quote) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    phone: Joi.number().required(),
    email: Joi.string().email().required(),
    from: Joi.string().min(3),
    to: Joi.string().min(3),
  });

  return schema.validate(quote);
}

exports.Quote = Quote;
exports.validateCustomer = validateCustomer;

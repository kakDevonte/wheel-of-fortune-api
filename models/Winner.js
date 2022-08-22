const { Schema, model } = require('mongoose');

const schema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  prize: { type: String, required: true },
  isJackpot: { type: Boolean, required: true },
  photo: { type: String, required: true },
  whenWon: { type: String, required: true },
});

module.exports = model('Winner', schema);

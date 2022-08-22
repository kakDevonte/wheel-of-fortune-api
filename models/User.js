const { Schema, model } = require('mongoose');

const schema = new Schema({
  id: { type: String, required: true },
  balance: { type: String, required: true },
});

module.exports = model('User', schema);

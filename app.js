const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = 5000;

app.use(express.json({ extended: true }));
app.use('/api/winner', require('./routes/winner.routes'));
app.use('/api/users', require('./routes/user.routes'));

async function start() {
  try {
    await mongoose.connect('mongodb://localhost:27017/wheelOfFortune', {});
    app.listen(PORT, () =>
      console.log(`App has benn started on port ${PORT}...`)
    );
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
}

start();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

const PORT = 5000;

app.use(express.json({ extended: true }));
app.use('/api/winners', require('./routes/winner.routes'));
app.use('/api/users', require('./routes/user.routes'));

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://Admin:xas2012@cluster0.u1ezmau.mongodb.net/app?retryWrites=true&w=majority',
      {}
    );
    app.listen(PORT, () =>
      console.log(`App has benn started on port ${PORT}...`)
    );
  } catch (e) {
    console.log('Server Error', e.message);
    process.exit(1);
  }
}

start();

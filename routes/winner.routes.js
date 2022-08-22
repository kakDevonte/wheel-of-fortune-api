const { Router } = require('express');
const Winner = require('../models/Winner');

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { first_name, last_name, prize, photo, isJackpot, whenWon } =
      req.body;
    const winner = new Winner({
      first_name,
      last_name,
      prize,
      photo,
      isJackpot,
      whenWon,
    });
    await winner.save();
    const winners = await Winner.find();
    res.status(201).json({ resultCode: 0, winners });
  } catch (e) {
    res.status(500).json({ resultCode: 1, message: e.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const winners = await Winner.find();
    res.json({ resultCode: 1, winners });
  } catch (error) {
    res.status(500).json({ resultCode: 1 });
  }
});

module.exports = router;

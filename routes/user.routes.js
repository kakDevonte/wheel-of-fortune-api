const { Router } = require('express');
const User = require('../models/User');

const router = Router();

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ id: id });
    res.status(201).json(user);
  } catch (e) {
    res.status(500).json({ resultCode: 1, message: e.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { id, balance } = req.body;
    const user = new User({ id, balance });
    await user.save();
    res.status(201).json({ resultCode: 0 });
  } catch (e) {
    res.status(500).json({ resultCode: 1, message: e.message });
  }
});

router.put('/', async (req, res) => {
  try {
    const { id, balance } = req.body;
    const user = { id, balance };
    await User.updateOne({ id: req.body._id }, user);
    res.status(201).json({ resultCode: 0 });
  } catch (error) {
    res.status(500).json({ resultCode: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ resultCode: 1 });
  }
});

module.exports = router;

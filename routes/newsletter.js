// routes/newsletter.js

const express = require('express');
const router = express.Router();
const Subscriber = require('../models/subscriber.js');

router.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  const existing = await Subscriber.findOne({ email });
  if (existing) {
    return res.status(409).json({ message: 'Email already subscribed' });
  }

  try {
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    return res.status(201).json({ message: 'Successfully subscribed' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

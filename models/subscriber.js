// const mongoose = require('mongoose');

// const subscriberSchema = new mongoose.Schema({
//   email: { type: String, required: true, unique: true },
//   subscribedAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('Subscriber', subscriberSchema);


const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  subscribedAt: { type: Date, default: Date.now },
});

// ✅ Fix: check if model is already compiled
module.exports = mongoose.models.Subscriber || mongoose.model('Subscriber', subscriberSchema);


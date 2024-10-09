const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    name: String,
    address: String,
    bio: String,
    image: String,
  },
});

module.exports = mongoose.model('User', UserSchema);

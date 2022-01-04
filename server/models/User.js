const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({

  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    max: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 30,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    max: 30,
  },
  bio: {
    text: String
  },
});

// set up pre-save middleware to create password
UserSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
UserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};



const User = model('User', UserSchema);
module.exports = User;

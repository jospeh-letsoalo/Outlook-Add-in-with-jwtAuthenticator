// models/User.js
const db = require('../configs/database');
const bcrypt = require('bcryptjs');

// Find user by email
const findByEmail = (email, callback) => {
  db.query("SELECT * FROM users WHERE email = ?", [email], (err, row) => {
    if (err) return callback(err, null);
    callback(null, row);
  });
};

// Create a new user
const create = (email, password, callback) => {
  const hashedPassword = bcrypt.hashSync(password, 8);
  db.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, hashedPassword], function (err) {
    if (err) return callback(err, null);
    callback(null, { id: this.lastID, email });
  });
};

module.exports = {
  findByEmail,
  create
};
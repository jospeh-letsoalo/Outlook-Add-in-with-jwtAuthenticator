const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtSecret = '3f8e7d6c5b4a39281f0e1d2c3b4a59687f6e5d4c3b2a1908f7e6d5c4b3a2910'// my default jwt token key

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET || jwtSecret, {
    expiresIn: '1h',// set expire in an hour
  });
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET || jwtSecret);
};

module.exports = { generateToken, verifyToken };
const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authMiddleware');
const { getContact } = require('../controllers/contactController');

router.get('/contact', authenticate, getContact);

module.exports = router;
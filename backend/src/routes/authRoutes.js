const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');


router.post('/login', async (req, res) => {

    const { email, password } = req.body;
    const token = await login(email,password);

    if(token!=''){
         res.json({ token });

    }else{
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    
});

module.exports = router;
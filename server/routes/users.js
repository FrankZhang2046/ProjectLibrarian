const express = require('express');
const router = express.Router();

const login = (req, res) => {
    res.send('this is the login page');
}

const register = (req, res) => {
    res.send('this is the register page');
}

router.get('/login', login);
router.get('/register', register);

module.exports = router; 
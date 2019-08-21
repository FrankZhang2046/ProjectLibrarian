const express = require('express');
const router = express.Router();

const greeting = (req, res) => {
    res.send('the server is working beautifully.');
}
router.get('/', greeting);

module.exports = router; 
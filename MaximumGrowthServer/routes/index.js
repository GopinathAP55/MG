// Importing required modules
const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Export the router
module.exports = router;

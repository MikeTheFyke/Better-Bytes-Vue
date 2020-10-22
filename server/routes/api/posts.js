const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// GET Posts
router.get('/', (req, res) => {
    res.send("Hello");
})

// ADD Posts


// DELETE Post

module.exports = router;
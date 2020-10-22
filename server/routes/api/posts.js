const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// GET Posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
})

// ADD Posts


// DELETE Post


// Connection to MongoDB
async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://mike_123:mike123@cluster0.r3pvv.mongodb.net/vue_bytes?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });
    return client.db('vue_bytes').collection('posts');
}

module.exports = router;
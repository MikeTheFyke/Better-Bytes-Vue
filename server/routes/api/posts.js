const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// GET Posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
})

// ADD Posts
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
});

// DELETE Post
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID (req.params.id)})
    res.status(200).send({});
})


// Connection to MongoDB
async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://mike_123:mike123@cluster0.r3pvv.mongodb.net/vue_bytes?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });
    return client.db('vue_bytes').collection('posts');
}

module.exports = router;
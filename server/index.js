const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());


const posts = require('./routes/api/posts');
const searched = require('./routes/api/searched');

app.use('/api/posts', posts)
app.use('/api/searched', searched)


// Heroko
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
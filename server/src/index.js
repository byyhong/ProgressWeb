const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.get('/progress', (req, res) => {
    res.send('Hello!');
});
app.listen(8080);
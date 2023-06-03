const express = require('express')
const isLoggedIn = require('./middleware/isLoggedIn');
const createProgressRoute = require('./routes/createProgressRoute');
const readProgressRoute = require('./routes/readProgressRoute');
const updateProgressRoute = require('./routes/updateProgressRoute');
const removeProgressRoute = require('./routes/removeProgressRoute');

const router = express.Router();

router.post('/login', require('./routes/loginRoute'));

router.post('/progress', isLoggedIn, createProgressRoute);
router.get('/progress', isLoggedIn, readProgressRoute);
router.put('/progress/:id', isLoggedIn, updateProgressRoute);
router.delete('/progress/:id', isLoggedIn, removeProgressRoute);

module.exports = router;
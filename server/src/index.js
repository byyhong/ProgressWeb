const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan')
const cors = require('cors');

const router = require('./router');
//have ./ to tell the program that it is a file and not a package 

dotenv.config();
const app = express();

app.use(express.json())
app.use(cors());
app.use(morgan('tiny'));

app.use(router);


app.listen(8080);
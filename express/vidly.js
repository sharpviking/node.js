const Joi = require('joi');
const mongoose = require('mongoose');
const genre = require('./routes/genre');
const express = require('express');

const app = express();
app.use('/api/genres', genre);



const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port}...`));
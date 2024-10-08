const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

app.use('/', authRoutes);
app.use('/', userRoutes);

app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect('mongodb://localhost:27017/authDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.listen(3000, () => console.log('Server running on port 3000'));

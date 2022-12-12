const userRoutes = require('./routes/user');
const threadRoutes = require('./routes/threads');
const commentRoutes = require('./routes/comment');
const { JsonWebTokenError } = require('jsonwebtoken');
const router = require('./routes/user');
const path = require('path');
const express = require("express");
const app = express();

app.use(express.json({limit: '25mb'}));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/auth', userRoutes);
app.use('/api/threads/', threadRoutes);
app.use('/api/comment/', commentRoutes);

module.exports = app;

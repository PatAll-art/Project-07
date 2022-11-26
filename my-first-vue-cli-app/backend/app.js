const userRoutes = require('./routes/user');
const { JsonWebTokenError } = require('jsonwebtoken');
const router = require('./routes/user');
const path = require('path');

const express = require("express");
const app = express();

app.use(express.json());


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use('/api/auth', userRoutes);

module.exports = app;
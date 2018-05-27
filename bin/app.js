'use strict'

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
let createError = require('http-errors');
let user = require('../src/routes/user');
let book = require('../src/routes/book');

app.use(cors());
app.use(helmet());
app.use(helmet.noCache()); //No-chache is not set on defalut helmet
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).json('Something broke!')
  });

app.use('/user', user);
app.use('/book', book);

module.exports = app;

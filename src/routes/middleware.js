'use strict';

const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { hasToken, isLoggedIn, isAdministrator } = require('./access');

router.use(cookieParser());

// const Users = require('../models/Users');

router.get('/middleware/register', (req, res) => {
  res.send('register');
});

router.post('/middleware/login', (req, res) => {
  const { id, username, password } = req.body;
  const payload = {
    id: id,
    username: req.body.username,
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    loggedIn: true
  }
  const secret = process.env.JWT_KEY;
  const token = jwt.sign(payload, secret, (err, token) => {
    res.cookie('auth', token).send('Logged In!');
  });
});

router.get('/middleware/logout', (req, res) => {
  res.cookie('auth','').send('Logged Out!');
});

router.get('/middleware/public', (req, res) => {
  res.send('Anybody can access this page!');
});

router.get('/middleware/registered', hasToken, isLoggedIn, (req, res) => {
  res.send('As a registered user you can access this route.');
});

router.get('/middleware/administrator', hasToken, isLoggedIn, isAdministrator, (req, res) => {
  res.send('As an adminstrator you can access this page');
});

module.exports = router;

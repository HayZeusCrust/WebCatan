const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.route('/')
	.get((req, res) => {
		res.render('signin/index');
	})
	.post((req, res) => {
		res.send('Signed in');
	});

router.route('/new')
	.get((req, res) => {
		res.render('signin/new', { user: new User() });
	})
	.post((req, res) => {
		res.send('new user created');
	});

module.exports = router;
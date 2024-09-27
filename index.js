//DEPENDENCIES
const express = require('express');
const { readFile } = require('fs');

//VARIABLES
const app = express();
const port = 3000;

//ROUTES
app.get('/', (req,res) => {
	readFile('views/home.html', 'utf-8', (err,html) => {
		if (err) {
			res.status(500).send('It\'s broke lol');
		}
		res.send(html);
	})
});

app.get('/baseGame', (req,res) => {
	readFile('views/baseGame.html', 'utf-8', (err,html) => {
		if (err) {
			res.status(500).send('It\'s broke lol');
		}
		res.send(html);
	})
});

//INITIALIZE APP
app.listen(port, () => {
	console.log('App available on http://localhost:3000')
});
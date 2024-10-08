if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

//DEPENDENCIES
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index');
const signinRouter = require('./routes/signin');

//APP SETUP
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

//ROUTERs
app.use('/', indexRouter);
app.use('/signin', signinRouter);

//INITIALIZE APP
app.listen(process.env.PORT || 3000, () => {
	console.log('App available on http://localhost:3000')
});
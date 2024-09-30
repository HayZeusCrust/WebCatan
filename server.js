//DEPENDENCIES
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const indexRouter = require('./routes/index');

//APP SETUP
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use('/', indexRouter);

app.use(logger);

function logger(req, res, next){
	console.log(req.originalUrl);
	next();
}

//INITIALIZE APP
app.listen(process.env.PORT || 3000, () => {
	console.log('App available on http://localhost:3000')
});
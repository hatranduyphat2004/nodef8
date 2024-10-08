const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes');

const app = express();
const PORT = 3333;

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config static file
app.use(express.static(path.join(__dirname, '/public')));

// http logger
app.use(morgan('combined'));

// view engine
app.engine(
	'hbs',
	handlebars({
		extname: '.hbs',
	})
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '\\resources\\views'));

// init routes
route(app);

// 404 page
app.get('*', function (req, res) {
	return res.render('404');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

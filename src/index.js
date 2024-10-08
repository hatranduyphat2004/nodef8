const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = 3333;

app.use(express.static(path.join(__dirname, '/public')));

app.use(morgan('combined'));

app.engine(
	'hbs',
	handlebars({
		extname: '.hbs',
	})
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '\\resources\\views'));

app.get('/', function (req, res) {
	return res.render('home');
});

app.get('/news', function (req, res) {
	return res.render('news');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

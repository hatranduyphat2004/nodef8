const express = require('express');
const app = express();

const PORT = 3333;

app.get('/', function (req, res) {
	return res.send('Hello World');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

const express = require('express');
const ejs = require('ejs');
const notes = require('./notes');

const app = express();
const PORT = process.env.PORT || 8000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const p1Notes = notes.p1Notes;
const p2Notes = notes.p2Notes;
const p3Notes = notes.p3Notes;

app.get('/', (req, res) => {
	res.render('index', {
		p1Notes,
		p2Notes,
		p3Notes
	});
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));

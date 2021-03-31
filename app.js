const express = require('express');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');


const app = express();
const dirPath = path.join(__dirname, 'public/notes');
const port = 8000;

// Getting all the files and their urls
const files = fs.readdirSync(dirPath).map(name => {
    return {
        name: path.basename(name, '.pdf'),
        url: `/notes/${name}`
    };
});

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render("index", {files})
});


app.listen(port, () => console.log(`app listening on port ${port}`));
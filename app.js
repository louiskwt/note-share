const express = require('express');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');


const app = express();
const dirPath = path.join(__dirname, 'public/notes');
const port = 8000;

// Getting all the files and their urls
const files = fs.readdirSync(dirPath).map(name => {
    let id = name[0];
    if(name[1] !== ' ') {
        id += name[1]
    }
    return {
        id: id,
        name: path.basename(name, '.pdf'),
        url: `/notes/${name}`
    };
});

// console.log(files);

// Compare id 
function compareID(a, b) {
    // turn the id into integer and compare
    return parseInt(a.id) - parseInt(b.id);
}
// sort the array in ascending order
files.sort(compareID);

// console.log(files);

// Filtering out DS_store file
const filteredFiles = files.filter(file => file.id !== '.D');

console.log(filteredFiles);



app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render("index", {filteredFiles})
});


app.listen(port, () => console.log(`app listening on port ${port}`));
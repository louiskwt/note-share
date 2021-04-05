const express = require('express');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8000;

// Getting all the files and their urls
const P1_dirPath = path.join(__dirname, 'public/p1_notes');
const P1_files = fs.readdirSync(P1_dirPath).map(name => {
    let id = name[0];
    if(name[1] !== ' ') {
        id += name[1]
    }
    return {
        id: id,
        name: path.basename(name, '.pdf'),
        url: `/p1_notes/${name}`
    };
});

const P2_dirPath = path.join(__dirname, 'public/p2_notes');
const P2_files = fs.readdirSync(P2_dirPath).map(name => {
    let id = name[0];
    if(name[1] !== ' ') {
        id += name[1]
    }
    return {
        id: id,
        name: path.basename(name, '.pdf'),
        url: `/p2_notes/${name}`
    };
});

const P3_dirPath = path.join(__dirname, 'public/p3_notes');
const P3_files = fs.readdirSync(P3_dirPath).map(name => {
    let id = name[0];
    if(name[1] !== ' ') {
        id += name[1]
    }
    return {
        id: id,
        name: path.basename(name, '.pdf'),
        url: `/p3_notes/${name}`
    };
});




// Compare id 
function compareID(a, b) {
    // turn the id into integer and compare
    return parseInt(a.id) - parseInt(b.id);
}

// sort the array in ascending order
P1_files.sort(compareID);
P2_files.sort(compareID);
P3_files.sort(compareID);

// console.log(files);

// Filtering out DS_store file
const filteredP1_Files = P1_files.filter(file => file.id !== '.D');
const filteredP2_Files = P2_files.filter(file => file.id !== '.D');
const filteredP3_Files = P3_files.filter(file => file.id !== '.D');




app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render("index", {filteredP1_Files, filteredP2_Files, filteredP3_Files});
});


app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
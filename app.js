// APP REQUIRES
const express = require('express');
const path = require('path');


// APP ENGINE
const app = express();

// SET VIEW ENGINE
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// SET PUBLIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));


// HOME ROUTE
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/companyHistory', (req, res) => {
    res.render('history');
})

app.get('/ourProjects', (req, res) => {
    res.render('projects');
})


// app.get('/development', (req, res) => {
//     res.render('development');
// });

// app.get('/design', (req, res) => {
//     res.render('design')
// });

// app.get('/events', (req, res) => {
//     res.render('events');
// })

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contacts', (req, res) => {
    res.render('contacts');
});

// SERVER RUNNING
const PORT = 80;
app.listen(PORT, () => console.log(`Server runned ${PORT}`));
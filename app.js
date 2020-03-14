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


// SERVER RUNNING
const PORT = 9999;
app.listen(PORT, () => console.log(`Server runned ${PORT}`));
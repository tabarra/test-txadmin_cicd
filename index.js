// deps
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

//routes
app.all('*', (req, res) => {
    res.send('Just testing ' + Date.now());
});

//start
app.listen(5000, () => console.log(`Server started`));

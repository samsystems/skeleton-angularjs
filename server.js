const path = require('path');
const express = require('express');

const app = express();

console.log('version: ' + process.env.NODE_ENV);

app.get('/bundle.js', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'build', 'bundle.js'));
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(process.env.PORT || 3000, '0.0.0.0', function (err) {
    if (err) {
        console.log(err);
    }

    console.log('Listening');
});

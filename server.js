var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('You\'re in reception. How can I help you?');
});

app.get('/basement', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('You\'re in the wine cellar. Those bottles are mine!');
});

app.get('/floor/1/bedroom', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hey, this is a private area!');
});

app.listen(8080);

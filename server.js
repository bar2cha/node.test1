var http = require('http');
var url = require('url');
var querystring = require('querystring');
var markdown = require('markdown').markdown;
var express = require('express');


var server = http.createServer(function(req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, {"Content-Type": "text/plain"});

    if ('firstname' in params && 'lastname' in params) {
        res.write('Your name is ' + params['firstname'] + ' ' + params['lastname']);
        console.log(params['firstname']+ ' ' + params['lastname']);

    }
    else {
        res.write('You do have a first name and a last name, don\'t you?');
            console.log("Zadej "+ 'http://localhost:8080?firstname=John&lastname=Doe');
    }


    res.end();
});

server.on('close', function() { // We listened to the close event
    console.log('Goodbye!');
})

console.log(markdown.toHTML('A paragraph in **markdown**!'));


var app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('You\'re in reception');
});

server.listen(8080); // Starts the server

//server.close(); // Stops the server. Triggers the close event

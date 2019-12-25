
var http = require('http');
var express = require('express');
var port =process.env.PORT || 8080;
var app = express();
var appRoutes = require('./routes/appRoutes');

app.use('/', appRoutes);

http.createServer(app).listen(port);

console.log("Backend running on port:", port);
var http = require('http');
var app = require('./app');
var server = http.createServer(app);

var listener = server.listen(5300, function() {
     console.log("Server success! PORT: " + listener.address().port);
});


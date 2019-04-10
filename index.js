
var express = require('express');
var app = express();
// var bodyParser = require('body-parser');

var server = require('http').createServer(app);
var path = require("path");
var port = process.env.PORT || 9000;
var router = express.Router();

// khởi tạo server listen cổng 9000
server.listen(port, function () {
    console.log('Server listening at port '  + port);
});


app.use(express.static(__dirname + '/dist'));

// rewrite virtual urls to angular app to enable refreshing of internal pages
app.get('*', function (req, res, next) {
    res.sendFile(path.resolve(__dirname + '/dist/index.html'));
});
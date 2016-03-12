var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

app.listen(8080, function (err) {

    if (err) {
        console.log(err);
    } else {
        console.log("Listening on port on 8080");
    }

})
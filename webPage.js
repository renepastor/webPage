/**
* ABCIT
* renepastor@gmail.com
* 20ABR2020
*/
var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/public/'));

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});
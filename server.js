var express = require('express');
var app = express();
var films = require('./client/src/models/films')()
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var FilmApi = require('./api/film_api');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use(express.static('client/build'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  new FilmApi(app);

  console.log('app listening at http://%s:%s', host, port);
});

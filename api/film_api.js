var Films = require('../client/src/models/films');

var FilmApi = function(app) {
  var films = new Films;

  app.get('/api/films', function(req, res){
    res.json({data: films})
  })

  app.get('/api/films/:id', function(req, res){
    var foundFilm = req.params.id;
    res.json({data: films[foundFilm]});
  });

  app.post('/api/films', function(req, res){
    films.push(req.body.film);
    res.json({data: films})
  });

  app.put('/api/films/:id', function(req, res){
    films[req.params.id] = req.body.film;
    res.json({data: films});
  });

  app.delete('/api/films/:id', function(req, res){
    films.splice(req.params.id, 1);
    res.json({data: films});
  });

}

module.exports = FilmApi;
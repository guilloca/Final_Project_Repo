var path = require('path');
var express = require('express');
var handlebars = require('handlebars');
var exphb = require('express-handlebars');

var gameData = require('./gameData');
var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphb({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
  res.status(200);
    res.render('index', {
      game: gameData
    });
});

app.get('/games', function (req, res) {
    res.status(200);
    res.render('index', {
        game: gameData
    });
});

app.get('/games/:gameID', function (req, res) {
    var gameID = req.params.gameID;
    if (postData[gameID]) {
        var game = postData[gameID];
        res.status(200).render('', game);
    }
    else {
        next();
    }
});

app.use(express.static('public'));

app.get('*', function (req, res) {
  res.status(404);
  res.render('404', {});
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});

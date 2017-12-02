var path = require('path');
var express = require('express');
var handlebars = require('handlebars');
var exphb = require('express-handlebars');

var gameData = require('./gameData');
var songData = require('./songData');
var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphb({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
  res.status(200);
    res.render('index', {
        posts: postData
    });
});
app.get('/posts/', function(req, res){
  res.status(200);
    res.render('index', {
        posts: postData
    });
});

app.get('/posts/:postId', function(req, res, next){
  var postId = req.params.postId;
  if(postData[postId]){
    var posts = postData[postId];
    res.status(200).render('postView', posts);
  }else {
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

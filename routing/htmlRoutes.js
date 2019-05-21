// Dependencies
var path = require('path');

app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

  app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });
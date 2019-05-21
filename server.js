//Dependencies:
var express = require('express');
var path = require ('path');

// Sets up the Express App
var app= express();
var PORT = process.env.PORT || 8080;
// console.log(app);
// console.log(process.env.PORT);



// Sets up Exress app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routing
// require("./app/routing/apiRoutes.js")(app);
// require("./app/routing/htmlRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
//Dependencies:
var express = require('express');
var path = require ('path');
var exphbs = require("express-handlebars");


// Sets up the Express App
var app= express();
var PORT = process.env.PORT || 8080;
// console.log(app);
// console.log(process.env.PORT);

// Sets up Exress app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));

// app.use(express.static('public'))

// routing
require("./app/routing/apiRoutes")(app); 
require("./app/routing/htmlRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
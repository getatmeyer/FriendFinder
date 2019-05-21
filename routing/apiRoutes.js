var path = require('path');
// console.log(path);

var friends = require('../app/data/friends.js');
// console.log(friends);


module.exports = function(app){

app.get("../api/friends", function(req,res){
    res.json(friends);
  });

  app.post("/api/friends", function(req,res){
    console.log("req: " + req)
    console.log("res: " + res)

        var match = {
            name: "",
            photo: "",

        }

  });
}

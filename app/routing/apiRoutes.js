var path = require('path');
// console.log(path);

var friends = require('../data/friends.js');
// console.log(friends); PASSED

module.exports = function(app){

app.get("/api/friends", function(req,res){
    // const friends = req.params.friends;
    res.json(friends);
  });
  
// Create new input in JSON format 
  app.post("/api/friends", function(req,res){
    console.log("req : ", req.body);
    // console.log("res: " + res);
    
    // compare scores
    var totalDifference = 0;

    //data to display the best match
    var bestFriends = {
      name: "",
      photo: "",
      friendDifference: 100
    };

    




    // parse array into integers

    // var newInput = function(array) {
    //   var newInput = [];
    //   for (var i = 0; i < array.length; i++) {
    //     newInput.push(parseInt(array[i]));
    //     console.log(newInput);
        
    //   } 
    //   }
    
  })
}



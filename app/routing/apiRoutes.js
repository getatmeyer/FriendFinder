var path = require('path');
// console.log(path);

var friends = require('../data/friends.js');
// console.log(friends);

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    // const friends = req.params.friends;
    res.json(friends);

  });

  // Create new input in JSON format 
  app.post("/api/friends", function (req, res) {
    var userData = req.body
    console.log(req.body.name);

    // this is the user's new best friend, which will be filled out after we compare the scores.  
    var bestFriend = {
      name: "",
      photo: "",
      friendDifference: 100
    };
    var results = req.body.score;

    for (var i = 0; i < friends.length; i++) {
      // results[i] = parseInt(results) 

      var currentFriend = friends[i]
      console.log("currentFriend", currentFriend);
      var target = 0
      console.log("target", target);

      for (var j = 0; j < currentFriend.score.length; j++) {
        // target += currentFriend.scores[j] + userData.scores[j]
        // console.log(typeof currentFriend.score[j])
        // console.log(typeof userData.score[j])

        target += Math.abs(parseInt(currentFriend.score[j]) - parseInt(userData.score[j]))
        console.log(userData.score[j] + "<--userData.score");
        console.log(target + "<--target")
      }
      //we are evaluating the current friend to see if they are the new best friend
      // if currentFriend is the new best friend, the current Friends details need to be updated on the bestFriend
      //bestFriend.name = currentFriend.name
      if (target <= bestFriend.friendDifference) {
        bestFriend.name = currentFriend.name
        bestFriend.photo = currentFriend.photo
        bestFriend.friendDifference = target
      }
    }


      
    friends.push(userData);
    res.json(bestFriend)


  })
  // console.log("res: " + res);
  // var userData = req.body;

  // var totalDifference = 0;

  // userData = {
  // "name": req.body.name,
  // "photo": req.body.photo,
  // "score": []
  // })
  // for (var i = 0; i < friends.length; i++) {

  // }
  // compare scores
  // var totalDifference = 0;

  //data to display the best match



  // parse array into integers

  // var newInput = function(array) {
  //   var newInput = [];
  //   for (var i = 0; i < array.length; i++) {
  //     newInput.push(parseInt(array[i]));
  //     console.log(newInput);

  //   } 
  //   }

  //   })
}//end of module.exports func



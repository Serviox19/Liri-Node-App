var request = require('request');
var keys = require("./keys.js");


function my-tweets(tweets){
    request("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=sciypher&count=20", function(error, response, body) {
      var tweetObject = JSON.parse(body);
      console.log(tweetObject.text);
    });
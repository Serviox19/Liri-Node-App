var Twitter = require('twitter');
var fs = require('fs');
//var keys = require('./keys.js')
 

var client = new Twitter({
  consumer_key: 'y8jQ70ajCtBsb6cJ1mSY8gBjh',
  consumer_secret: 'FT6G6dGhc7WCaev3D5tb90kQj7JfJSg7JluI24YXELfOcpqjLS',
  access_token_key: 'AjleY48qvosfDM3PHHwFwgwgmJz0gILlc6brOv6',
  access_token_secret: 'zvjuK02MCHNZlVAzR1VahPkzHGwR5fNSiWOhd48m9h0ln'
});
 

var params = {screen_name: 'sciypher'};
client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (error) {
    console.log(error);
  }else{
    for (var i = 0; i < tweets.length; i++) {
      console.log(tweets[i].text);
    };
  }
});

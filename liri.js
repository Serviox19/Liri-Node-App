var request = require('request');
var fs = require('fs');

switch(process.argv[2]){
  case 'my-tweets':
    var getTweets = require('./twitter.js');
    break;
  case 'spotify-this-song':
    var getSong = require('./spotify.js');
    break;
  case 'movie-this':
    var getMovies = require('./movie.js');
    break;  
}
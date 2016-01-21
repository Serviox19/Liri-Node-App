var request = require('request');
var fs = require('fs');


 function movieSearch(movie){
    request('http://www.omdbapi.com/?t='+movie+'&tomatoes=true', function(error, response, body){
      var parsedMovie = JSON.parse(body);

      var movieInfo = 'Title: '+ parsedMovie.Title + '\r\n'
      +'Year: ' + parsedMovie.Year + '\r\n' 
      +'Imdb rating: ' + parsedMovie.imdbRating + '\r\n'
      +'Country: ' + parsedMovie.Country + '\r\n'
      +'Language: ' + parsedMovie.Language + '\r\n'
      +'Plot: ' + parsedMovie.Plot + '\r\n'
      +'Actors: ' + parsedMovie.Actors + '\r\n'
      +'Tomato Rating: ' + parsedMovie.tomatoRating + '\r\n'
      +'Tomato url: ' + parsedMovie.tomatoURL + '\r\n';

      if(error){
        console.log('error type: '+error);
      }else{
        console.log(movieInfo);
      }
    });
  }
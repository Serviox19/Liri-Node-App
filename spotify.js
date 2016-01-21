var spotify = require('spotify');
var trackData;
var fs = require('fs');
var search = process.argv[3]; 

spotify.search({ type: 'track', query: search }, function(err, data) {
  if ( err ) {
    console.log('Error occurred: ' + err);
    return;
  }else{
    trackData = data.tracks.items;
    trackData.forEach(function(song) {
      console.log('Artist: ' + song.artists[0].name);
      console.log('Song: ' + song.name);
      console.log('Album: ' + song.album.name);
      console.log('\r\n');
    });
  }   
});
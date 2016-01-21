var spotify = require('spotify');
var fs = require('fs'); 

spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 console.log(data);   
});
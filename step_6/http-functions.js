
var https = require('https');

module.exports = function getHTML (options, callback) {

  https.get(options, function(response){

    response.setEncoding('utf8');

    response.on('data', function(data) {

        callback(data);

      });

    response.on('end', function() {
      console.log('Response ended.');
    });
  })
}




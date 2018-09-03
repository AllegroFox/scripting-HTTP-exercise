var https = require('https');


function getAndPrintHTML (options) {

  var options = {
    host: process.argv[2],
    path: process.argv[3]
  };

  https.get(options, function(response){

    response.setEncoding('utf8');

    response.on('data', function(data) {
      var dataArray = [];
      dataArray.push(data);
      console.log(dataArray.join('\n'));
    });

    response.on('end', function() {
      console.log('Response ended.');
    });
  })
}

getAndPrintHTML();



var https = require('https');


function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(response){

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



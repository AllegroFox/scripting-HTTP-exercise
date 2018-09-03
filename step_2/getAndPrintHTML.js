const https = require('https');


function getAndPrintHTML () {

  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response){

    response.setEncoding('utf8');

    response.on('data', function(data) {
      let dataArray = [];
      dataArray.push(data);
      console.log(dataArray.join('\n'));
    });

    response.on('end', function() {
      console.log('Response ended.');
    });
  })
}

getAndPrintHTML();



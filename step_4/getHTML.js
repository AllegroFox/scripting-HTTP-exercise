var https = require('https');


function getHTML (options, callback) {

  var options = {
    host: process.argv[2],
    path: process.argv[3]
  };

  https.get(options, function(response){

    response.setEncoding('utf8');

    response.on('data', function(data) {

        printHTML(data);

      });

    response.on('end', function() {
      console.log('Response ended.');
    });
  })
}

function printHTML (html) {
  let dataArray = [];
      dataArray.push(html);
      console.log(dataArray.join('\n'));
}

getHTML();



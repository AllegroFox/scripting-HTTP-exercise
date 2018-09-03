const getHTML = require('../http-functions');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {

  let htmlString = html.toLowerCase();
  console.log(htmlString);

}

getHTML(requestOptions, printLowerCase);

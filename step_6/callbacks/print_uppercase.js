const getHTML = require('../http-functions');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

  let htmlString = html.toUpperCase();
  console.log(htmlString);

}

getHTML(requestOptions, printUpperCase);

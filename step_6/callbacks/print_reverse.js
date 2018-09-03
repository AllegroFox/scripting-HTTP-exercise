const getHTML = require('../http-functions');

const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {

  let htmlString = html.toString();
  let reverse = htmlString.split("").reverse().join("");

  console.log(reverse);

}

getHTML(requestOptions, printReverse);

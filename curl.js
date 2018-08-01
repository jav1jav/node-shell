const request = require('request');

module.exports = (urlX) => request(urlX, (err, response, body) => {
  if (err) {
    throw err;
  } else {
    process.stdout.write('error: ' + err); // Print the error if one occurred
    process.stdout.write('statusCode: ' + response && response.statusCode); // Print the response status code if a response was received
    process.stdout.write('body: ' + body); // Print the HTML for the Google homepage
    process.stdout.write('\nprompt > ');
  }
});

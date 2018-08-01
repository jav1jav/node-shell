const request = require('request');

module.exports = (urlX) => request(urlX, (err, response, body) => {
  console.log(urlX);
  if (err) {
    throw err;
  } else {
    process.stdout.write('error: ' + err + '\n'); // Print the error if one occurred
    process.stdout.write('statusCode: ' + JSON.stringify(response) + ' - ' + response.statusCode + '\n'); // Print the response status code if a response was received
    process.stdout.write('body: \n' + body ); // Print the HTML for the Google homepage
    process.stdout.write('\nprompt > ');
  }
});

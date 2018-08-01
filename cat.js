const fs = require('fs');

module.exports = (fileName) => fs.readFile(fileName, 'utf8', (err, data) => {
  //console.log('inside cat.js', fileName);
  if (err) {
    throw err;
  } else {
    process.stdout.write(data);
    process.stdout.write('\nprompt > ');
  }
});

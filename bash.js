// Output a prompt
process.stdout.write('first bash prompt > ');

// Variable to use in executing commands imported from other modules
let commandX;

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); // remove the newline
  //process.stdout.write('You typed: ' + cmd );
  if (cmd === 'pwd') {
    //process.stdout.write(__dirname);
    //process.stdout.write(process.cwd());
    commandX = require('./pwd');
    commandX();
  } else if (cmd === 'ls') {
    commandX = require('./ls');
    //console.dir(commandX());
    commandX();
  }
  //process.stdout.write("\nbash - prompt > ");
});

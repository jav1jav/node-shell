// Output a prompt
process.stdout.write('prompt > ');

// Variable to use in executing commands imported from other modules
let commandX;

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); // remove the newline
  if (cmd === 'pwd' | cmd === 'ls') {
    commandX = require('./' + cmd);
    commandX();
  }

});

//process.stdout.write("\nbash - prompt > ");
//process.stdout.write(__dirname);
//process.stdout.write(process.cwd());

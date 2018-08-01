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
  } else if (cmd.slice(0, 3) === 'cat') {
    //console.log('inside cat');
    commandX = require('./' + cmd.slice(0, 3));
    //console.log(cmd.slice(4));
    commandX(cmd.slice(4));
  } else {
    process.stdout.write('\nprompt > ');
  }

});

//process.stdout.write("\nbash - prompt > ");
//process.stdout.write(__dirname);
//process.stdout.write(process.cwd());

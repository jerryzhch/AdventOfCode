var standard_input = process.stdin;
// Set input character encoding.
//let dataArr = [];
let hor = 0;
let ver = 0;
let ver2 = 0;
let aim = 0;
standard_input.setEncoding('utf-8');
// Prompt user to input data in console.
console.log('Please input text in command line.');
// When user input data and click enter key.
standard_input.on('data', function (data) {
  // User input exit.
  if (data.includes('exit')) {
    console.log('Part 1: ' + hor * ver);
    console.log('Part 2: ' + hor * ver2);
    process.exit();
  } else {
    //dataArr.push(data);
    const splitted = data.split(' ');

    if (data.includes('forward')) {
      hor += splitted[1] - 0;
      ver2 += aim * (splitted[1] - 0);
    } else if (data.includes('up')) {
      ver -= data.split(' ')[1] - 0;
      aim -= splitted[1] - 0;
    } else if (data.includes('down')) {
      ver += data.split(' ')[1] - 0;
      aim += splitted[1] - 0;
    }
  }
});

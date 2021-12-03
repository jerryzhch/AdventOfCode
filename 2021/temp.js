var standard_input = process.stdin;
// Set input character encoding.
let dataArr = [];
standard_input.setEncoding('utf-8');
// Prompt user to input data in console.
console.log('Please input text in command line.');
// When user input data and click enter key.
standard_input.on('data', function (data) {
  // User input exit.
  if (data.includes('exit')) {
    process.exit();
  } else {
    dataArr.push(data);
  }
});

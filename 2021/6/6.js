var standard_input = process.stdin;
// Set input character encoding.
let dataArr = [];
let days = 0;
standard_input.setEncoding('utf-8');
// Prompt user to input data in console.
console.log('Please input text in command line.');
// When user input data and click enter key.
standard_input.on('data', function (data) {
  // User input exit.
  if (data.includes('exit')) {
    while (days < 256) {
      for (let i = 0; i < dataArr.length; i++) {
        if (dataArr[i] == 0) {
          dataArr.push(9);
          dataArr[i] = 6;
        } else if (dataArr[i] < 10) {
          dataArr[i]--;
        }
      }
      days++;
      console.log(days + ' ' + dataArr.length);
    }

    process.exit();
  } else {
    dataArr = data.split(',');
  }
});

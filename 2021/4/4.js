var standard_input = process.stdin;
// Set input character encoding.
let dataArr = [];
let boards = {};
let board = [];
let counter = 0;
let boardsSec = false;
let boardsCount = 0;
let id = 0;
standard_input.setEncoding('utf-8');
// Prompt user to input data in console.
console.log('Please input text in command line.');
// When user input data and click enter key.
standard_input.on('data', function (data) {
  // User input exit.
  if (data.includes('exit')) {
    dataArr.forEach((currentNumber) => {
      for (let i = 0; i < id; i++) {
        boards[i].forEach((row) => {
          const index = row.findIndex((el) => el === currentNumber);
          row[index] = true;
          console.log(row);
        });
      }
    });
    console.log(boards);

    process.exit();
  } else if (boardsSec) {
    if (counter > 4) {
      boards[id] = board;
      id++;
      counter = 0;
      board = [];
    } else {
      let arr = data.split(' ');
      const filtered = arr.filter(isNumber).map((val) => val - 0);

      board.push(filtered);
      counter++;
    }
  } else if (data.includes('boards')) {
    boardsSec = true;
  } else {
    dataArr = [...data.split(',').map((val) => val - 0)];
  }
});
function isNumber(value) {
  const val = !isNaN(value - 0) && value != '';
  return val;
}

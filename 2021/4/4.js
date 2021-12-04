var standard_input = process.stdin;
// Set input character encoding.
let dataArr = [];
let boards = {};
let board = [];
let bingoSums = [];
let winningBoards = [];
let counter = 0;
let boardsSec = false;
let foundBingo = false;
let foundLast = false;
let boardsCount = 0;
let id = 0;
standard_input.setEncoding("utf-8");
// Prompt user to input data in console.
console.log("Please input text in command line.");
// When user input data and click enter key.
standard_input.on("data", function (data) {
  // User input exit.
  if (data.includes("exit")) {
    bingoSums = new Array(id).fill(0);
    for (let i = 0; i < id; i++) {
      boards[i].forEach((row) => {
        bingoSums[i] += row.reduce((a, b) => a + b);
      });
    }
    dataArr.forEach((currentNumber) => {
      mainL: for (let i = 0; i < id; i++) {
        if (foundBingo && foundLast) break mainL;
        for (let j = 0; j < boards[i].length; j++) {
          const row = boards[i][j];
          const index = row.findIndex((el) => el === currentNumber);
          if (index >= 0) {
            bingoSums[i] -= currentNumber;
            row[index] = true;
          }
          if (row.every((el) => el.toString() === "true") || columnAreTrue(boards[i])) {
            if (!winningBoards.includes(i)) winningBoards.push(i);
            if (!foundBingo) {
              foundBingo = true;
              console.log("Part 1: " + bingoSums[i] * currentNumber);
              break;
            } else if (winningBoards.length >= id) {
              foundLast = true;
              console.log("Part 2: " + bingoSums[i] * currentNumber);
              break;
            }
          }
        }
      }
    });

    process.exit();
  } else if (boardsSec) {
    if (counter > 4) {
      boards[id] = board;
      id++;
      counter = 0;
      board = [];
    } else {
      let arr = data.split(" ");
      const filtered = arr.filter(isNumber).map((val) => val - 0);

      board.push(filtered);
      counter++;
    }
  } else if (data.includes("boards")) {
    boardsSec = true;
  } else {
    dataArr = [...data.split(",").map((val) => val - 0)];
  }
});
function isNumber(value) {
  const val = !isNaN(value - 0) && value != "";
  return val;
}
function columnAreTrue(arr2d) {
  let yes = false;
  let checkArr = new Array(arr2d.length).fill(false);
  for (let i = 0; i < arr2d.length; i++) {
    checkArr = arrayColumn(arr2d, i);
    yes = yes == true ? yes : checkArr.every((el) => el == true);
  }
  return yes;
}
const arrayColumn = (arr, n) => arr.map((x) => x[n]);

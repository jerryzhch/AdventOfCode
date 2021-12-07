const fs = require('fs');

let dataArr = [];
let before = 0;
fs.readFile('input.txt', (err, data) => {
  if (err) throw err;

  dataArr = data.toString().split(',');
  for (let i = 0; i < dataArr.length; i++) {
    let distances = 0;
    dataArr.forEach((el) => {
      distances += Math.abs(el - i);
    });
    if (i == 0) {
      before = distances;
    } else {
      if (before > distances) before = distances;
    }
  }
  console.log('Part 1: ' + before);

  before = 0;

  for (let i = 0; i < dataArr.length; i++) {
    let distances = 0;
    dataArr.forEach((el) => {
      const difference = Math.abs(el - i);
      distances += (difference * (difference + 1)) / 2;
    });
    if (i == 0) {
      before = distances;
    } else {
      if (before > distances) before = distances;
    }
  }
  console.log('Part 2: ' + before);
});

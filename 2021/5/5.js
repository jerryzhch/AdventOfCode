var standard_input = process.stdin;
// Set input character encoding.
let dataArr = [];
let map1 = createAndFillTwoDArray({ rows: 1000, columns: 1000, defaultValue: 0 });
let map2 = createAndFillTwoDArray({ rows: 1000, columns: 1000, defaultValue: 0 });
standard_input.setEncoding('utf-8');
// Prompt user to input data in console.
console.log('Please input text in command line.');
// When user input data and click enter key.
standard_input.on('data', function (data) {
  // User input exit.
  if (data.includes('exit')) {
    for (let i = 0; i < dataArr.length; i++) {
      const pair1 = dataArr[i][0].split(',');
      let pair2 = dataArr[i][1].split(',');
      pair2[1] -= 0;
      if (pair1[0] == pair1[1] && pair2[0] == pair2[1]) {
        const startIndex = pair1[1] > pair2[1] ? pair2[1] : pair1[1];
        const endIndex = pair1[1] < pair2[1] ? pair2[1] : pair1[1];
        for (let j = startIndex; j <= endIndex; j++) {
          map2[j][j] = map2[j][j] + 1;
        }
      } else if (pair1[0] == pair2[1] && pair2[0] == pair1[1]) {
        const startIndex = pair1[0];
        let revStartIndex = pair1[1];
        let revEndIndex = pair1[0];
        while (!(revStartIndex == startIndex)) {
          console.log(revStartIndex);
          map2[revStartIndex][revEndIndex] = map2[revStartIndex][revEndIndex] + 1;
          revStartIndex++;
          revEndIndex--;
        }
      } else if (pair1[0] == pair2[0]) {
        const startIndex = pair1[1] > pair2[1] ? pair2[1] : pair1[1];
        const endIndex = pair1[1] < pair2[1] ? pair2[1] : pair1[1];
        for (let j = startIndex; j <= endIndex; j++) {
          map1[pair1[0]][j] = map1[pair1[0]][j] + 1;
          map2[pair1[0]][j] = map2[pair1[0]][j] + 1;
        }
      } else if (pair1[1] == pair2[1]) {
        const startIndex = pair1[0] > pair2[0] ? pair2[0] : pair1[0];
        const endIndex = pair1[0] < pair2[0] ? pair2[0] : pair1[0];
        for (let j = startIndex; j <= endIndex; j++) {
          map1[j][pair1[1]] = map1[j][pair1[1]] + 1;
          map2[j][pair1[1]] = map2[j][pair1[1]] + 1;
        }
      }
    }
    let counter = 0;
    map1.forEach((row) => {
      row.forEach((el) => {
        if (el > 1) counter++;
      });
    });
    console.log('Part 1: ' + counter);
    counter = 0;
    map2.forEach((row) => {
      row.forEach((el) => {
        if (el - 0 > 1) counter++;
      });
    });
    console.log('Part 2: ' + counter);
    process.exit();
  } else {
    const pair = data.split(' -> ');
    dataArr.push(pair);
  }
});

function createAndFillTwoDArray({ rows, columns, defaultValue }) {
  return Array.from({ length: rows }, () => Array.from({ length: columns }, () => defaultValue));
}
// createAndFillTwoDArray({ rows: 1000, columns: 1000, defaultValue: 0 });

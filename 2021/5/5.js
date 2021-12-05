var standard_input = process.stdin;
// Set input character encoding.
let dataArr = [];
let map = createAndFillTwoDArray({ rows: 1000, columns: 1000, defaultValue: 0 });
standard_input.setEncoding('utf-8');
// Prompt user to input data in console.
console.log('Please input text in command line.');
// When user input data and click enter key.
standard_input.on('data', function (data) {
  // User input exit.
  if (data.includes('exit')) {
    for (let i = 0; i < dataArr.length; i++) {
      const pair1 = dataArr[i][0].split(',');
      const pair2 = dataArr[i][1].split(',');
      if (pair1[0] == pair2[0] && pair1[1] == pair2[1] - 0) {
        const startIndex = pair1[1] > pair2[1] - 0 ? pair2[1] - 0 : pair1[1];
        const endIndex = pair1[1] < pair2[1] - 0 ? pair2[1] - 0 : pair1[1];
        for (let j = startIndex; j < endIndex; j++) {
          map[j][j] += 1;
        }
      } else if (pair1[0] == pair2[0]) {
        const startIndex = pair1[1] > pair2[1] - 0 ? pair2[1] - 0 : pair1[1];
        const endIndex = pair1[1] < pair2[1] - 0 ? pair2[1] - 0 : pair1[1];
        for (let j = startIndex; j < endIndex; j++) {
          map[j][pair1[0]] += 1;
          console.log(map[j][pair1[0]]);
        }
      } else if (pair1[1] == pair2[1] - 0) {
        const startIndex = pair1[0] > pair2[0] ? pair2[0] : pair1[0];
        const endIndex = pair1[0] < pair2[0] ? pair2[0] : pair1[0];
        for (let j = startIndex; j < endIndex; j++) {
          map[pair1[1]][j] += 1;
          console.log(map[pair1[1]][j]);
        }
      }
    }
    let counter = 0;
    map.map((row) =>
      row.map((el) => {
        if (el >= 2) {
          counter++;
        }
      })
    );
    console.log(counter);
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

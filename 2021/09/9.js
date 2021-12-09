const fs = require('fs');

let dataArr = [];
fs.readFile('input2.txt', (err, data) => {
  if (err) throw err;

  let dataR = [];
  dataR = data.toString().split('\r\n');

  dataR.forEach((el) => {
    let res = [];
    for (let i = 0, len = el.length; i < len; i += 1) {
      res.push(+el.charAt(i));
    }
    dataArr.push(res);
  });
  let lowest = [];

  for (let i = 0; i < dataArr.length; i++) {
    for (let j = 0; j < dataArr[i].length; j++) {
      let current = dataArr[i][j];
      if (i == 0) {
        let right = dataArr[i][j + 1];
        let down = dataArr[i + 1][j];
        if (j == 0) {
          if (current <= right && current <= down) {
            lowest.push(current);
            dataArr[i][j + 1] = 10;
            dataArr[i + 1][j] = 10;
          }
        } else if (j == dataArr[i].length - 1) {
          let left = dataArr[i][j - 1];
          let down = dataArr[i + 1][j];
          if (current <= left && current <= down) {
            lowest.push(current);
            dataArr[i][j - 1] = 10;
            dataArr[i + 1][j] = 10;
          }
        } else {
          let left = dataArr[i][j - 1];
          if (current <= right && current <= down && current <= left) {
            lowest.push(current);
            dataArr[i][j + 1] = 10;
            dataArr[i + 1][j] = 10;
            dataArr[i][j - 1] = 10;
          }
        }
        continue;
      } else if (i == dataArr.length - 1) {
        if (j == 0) {
          let right = dataArr[i][j + 1];
          let up = dataArr[i - 1][j];
          if (current <= right && current <= up) {
            lowest.push(current);
            dataArr[i][j + 1] = 10;
            dataArr[i - 1][j] = 10;
          }
        } else if (j == dataArr[i].length - 1) {
          let left = dataArr[i][j - 1];
          let up = dataArr[i - 1][j];
          if (current <= left && current <= up) {
            lowest.push(current);
            dataArr[i][j - 1] = 10;
            dataArr[i - 1][j] = 10;
          }
        } else {
          let right = dataArr[i][j + 1];
          let left = dataArr[i][j - 1];
          let up = dataArr[i - 1][j];
          if (current <= right && current <= up && current <= left) {
            lowest.push(current);
            dataArr[i][j + 1] = 10;
            dataArr[i - 1][j] = 10;
            dataArr[i][j - 1] = 10;
          }
        }
        continue;
      } else {
        let right = dataArr[i][j + 1];
        let up = dataArr[i - 1][j];
        let down = dataArr[i + 1][j];
        let left = dataArr[i][j - 1];
        if (current <= right && current <= up && current <= left && current <= down) {
          lowest.push(current);
          dataArr[i][j + 1] = 10;
          dataArr[i + 1][j] = 10;
          dataArr[i][j - 1] = 10;
          dataArr[i + 1][j] = 10;
        }
      }
      continue;
    }
  }
  const result = lowest.map((el) => el + 1).reduce((a, b) => a + b);

  console.log(result);
});

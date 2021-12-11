const fs = require('fs');

let dataArr = [];
fs.readFile('input.txt', (err, data) => {
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
  let counter = 0;
  while (counter < 100) {
    for (let i = 0; i < dataArr.length; i++) {
      for (let j = 0; j < dataArr[j].length; j++) {
        if (dataArr[i][j] == 9) {
          dataArr[i][j] == -1;
        } else {
          dataArr[i][j]++;
        }
      }
    }
    for (let i = 0; i < dataArr.length; i++) {
      for (let j = 0; j < dataArr[j].length; j++) {
        if (dataArr[i][j] == -1) {
          increaseAdjacent(i, j);
        }
      }
    }
  }
  console.log(dataArr);
});

function increaseAdjacent(i, j) {
  let point = dataArr[i][j];
  let n = -1;
  let ne = -1;
  let e = -1;
  let se = -1;
  let s = -1;
  let sw = -1;
  let w = -1;
  let nw = -1;

  try {
    dataArr[i - 1][j]++;
  } catch (error) {}
  try {
    dataArr[i - 1][j + 1]++;
  } catch (error) {}
  try {
    dataArr[i][j + 1]++;
  } catch (error) {}
  try {
    dataArr[i + 1][j + 1]++;
  } catch (error) {}
  try {
    dataArr[i + 1][j]++;
  } catch (error) {}
  try {
    dataArr[i + 1][j - 1]++;
  } catch (error) {}
  try {
    dataArr[i][j - 1]++;
  } catch (error) {}
  try {
    dataArr[i - 1][j - 1]++;
  } catch (error) {}
}

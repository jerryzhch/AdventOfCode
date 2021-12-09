const fs = require("fs");

let dataArr = [];
fs.readFile("input.txt", (err, data) => {
  if (err) throw err;

  let dataR = [];
  dataR = data.toString().split("\r\n");

  dataR.forEach((el) => {
    let res = [];
    for (let i = 0, len = el.length; i < len; i += 1) {
      res.push(+el.charAt(i));
    }
    dataArr.push(res);
  });
  let lowest = 0;

  for (let i = 0; i < dataArr.length; i++) {
    for (let j = 0; j < dataArr[i].length; j++) {
      if (isLowAdjacent(i, j)) {
        lowest += dataArr[i][j] + 1;
      }
    }
  }
  console.log(lowest);
});
function isLowAdjacent(i, j) {
  let point = dataArr[i][j];
  let n = -1;
  let s = -1;
  let e = -1;
  let w = -1;
  try {
    n = dataArr[i - 1][j];
  } catch (error) {}
  try {
    s = dataArr[i + 1][j];
  } catch (error) {}
  try {
    e = dataArr[i][j + 1];
  } catch (error) {}
  try {
    w = dataArr[i][j - 1];
  } catch (error) {}
  if (n >= 0 && point >= n) return false;
  if (s >= 0 && point >= s) return false;
  if (e >= 0 && point >= e) return false;
  if (w >= 0 && point >= w) return false;

  return true;
}

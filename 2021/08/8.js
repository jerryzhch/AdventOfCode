const fs = require('fs');

let dataArr = [];
const segs = { acedgfb: 8, cdfbe: 5, gcdfa: 2, fbcad: 3, dab: 7, cefabd: 9, cdfgeb: 6, eafb: 4, cagedb: 0, ab: 1 };
fs.readFile('input.txt', (err, data) => {
  if (err) throw err;

  const lines = data.toString().split(/\r?\n/);
  lines.forEach((element) => {
    dataArr.push(element.toString().split(' | '));
  });
  console.log(dataArr);

  let counter = 0;
  dataArr.forEach((el) => {
    el[1].split(' ').forEach((e) => {
      const length = e.length;
      if ((length == 2) | (length == 4) | (length == 3) | (length == 7)) counter++;
    });
    let segments = { 5: [], 6: [] };
    el[0].split(' ').forEach((e) => {
      const length = e.length;
      switch (length) {
        case 2:
          segments[1] = e;
          break;
        case 3:
          segments[7] = e;
          break;
        case 4:
          segments[4] = e;
          break;
        case 8:
          segments[8] = e;
          break;
        case 5:
          let arr = segments[5];
          arr.push(e);
          segments[5] = arr;
          break;
        case 6:
          let arr2 = segments[6];
          arr2.push(e);
          segments[6] = arr2;

        default:
          break;
      }
    });
    segments[5].forEach((el) => {
      if (el.includes(segments[1].charAt(0)) && el.includes(segments[1].charAt(1))) {
        segments[3] = el;
        let array = segments[5].filter((val) => val != el);
        segments[5].filter((val) => val == el);
        num1Seg = sort(segments[1]);
      }
    });
  });
  console.log(counter);
  console.log(segments);
});
const sort = (str) =>
  str
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');

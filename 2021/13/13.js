const fs = require('fs');

let dataArr = [];
let highestX = 0;
let highestY = 0;
let arr2d = [];
fs.readFile('input.txt', (err, data) => {
  if (err) throw err;

  dataArr = data.toString().split(/\r?\n/);

  let pointSet = new Set();
  let foldSet = new Set();
  dataArr.forEach((d) => {
    const s = d.split(',');

    if (s.length == 2) {
      pointSet.add({ x: s[0] - 0, y: s[1] - 0 });
      if (highestX < s[0] - 0) highestX = s[0];
      if (highestY < s[1] - 0) highestY = s[1];
    } else {
      const t = s[0].split('=');
      if (t.length == 2) {
        foldSet.add({ [t[0].slice(-1)]: t[1] - 1 });
      }
    }
  });
  let arrX = Array(highestX + 1).fill('');
  for (let i = 0; i < highestY + 1; i++) {
    arr2d.push(arrX);
  }
  pointSet.forEach((point) => {
    arr2d[point.y][point.x] = '#';
  });
  foldSet.forEach((folder) => {
    foldIt(folder);
  });
});

function foldIt(f) {
  if (Object.keys(f) == 'x') {
    const barrier = f.x;
    for (let j = 0; j < arr2d.length; j++) {
      for (let i = barrier + 1; i < highestX; i++) {
        arr2d[j][barrier - (i - barrier)] = arr2d[j][i];
        arr2d[j][i] = '';
      }
    }
    console.log(arr2d.filter((el) => el.filter((e) => e == '#')).length);
  } else {
  }
}

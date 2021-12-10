const fs = require('fs');

let dataArr = [];
fs.readFile('input.txt', (err, data) => {
  if (err) throw err;

  dataArr = data.toString().split('\r\n');

  let pairs = new Map();
  pairs.set('(', ')');
  pairs.set('[', ']');
  pairs.set('{', '}');
  pairs.set('<', '>');
  let points = {};
  // Change points here to make part 1 work
  points[')'] = 1;
  points[']'] = 2;
  points['}'] = 3;
  points['>'] = 4;
  let p2Points = [];
  let total = 0;
  for (let _i = 0, lines_1 = dataArr; _i < dataArr.length; _i++) {
    let line = lines_1[_i];
    let stack = [];
    let valid = true;
    for (let _a = 0, line_1 = line; _a < line_1.length; _a++) {
      let char = line_1[_a];
      if (pairs.has(char)) {
        stack.push(pairs.get(char) || '');
      } else {
        let expected = stack.pop();
        if (expected != char) {
          total += points[char] || 0;
          valid = false;
          break;
        }
      }
    }
    if (valid) {
      let score = 0;
      while (stack.length > 0) {
        let char = stack.pop() || '';
        score *= 5;
        score += points[char] || 0;
      }
      p2Points.push(score);
    }
  }
  p2Points.sort(function (a, b) {
    return b - a;
  });
  console.log(p2Points[Math.floor(p2Points.length / 2)]);
  console.log(total);
});

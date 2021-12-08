const fs = require('fs');

let dataArr = [];
fs.readFile('input.txt', (err, data) => {
  if (err) throw err;

  dataArr = data.toString().split(',');
});

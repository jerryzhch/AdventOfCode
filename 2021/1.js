var standard_input = process.stdin;
// Set input character encoding.
let beforeArr = [];
let oneAhead = [];
let thenow = [];
let counter1 = 0;
let counter2 = 0;
let sumBefore = 0;
let sumNow = 0;
standard_input.setEncoding('utf-8');
// Prompt user to input data in console.
console.log('Please input text in command line.');
// When user input data and click enter key.
standard_input.on('data', function (data) {
  // User input exit.
  if (data.includes('exit')) {
    let now = 0;
    let beforeVal = NaN;
    // Program exit.
    thenow.forEach((el) => {
      now = el;
      if (beforeVal < now) counter1++;
      beforeVal = now;
    });
    console.log('Part 1: ' + counter1);
    console.log('Part 2: ' + counter2);
    process.exit();
  } else {
    thenow.push(data - '0');
    // Print user input in console.
    if (thenow.length > 3) {
      for (let i = thenow.length - 3; i < thenow.length; i++) {
        oneAhead.push(thenow[i]);
      }

      beforeArr.forEach((el) => (sumBefore += el));
      oneAhead.forEach((el) => (sumNow += el));
      if (sumBefore < sumNow) counter2++;
      beforeArr = oneAhead;
      sumBefore = 0;
      sumNow = 0;
      oneAhead = [];
    }
  }
});

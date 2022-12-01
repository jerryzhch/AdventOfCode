let data = require("fs")
  .readFileSync("input.txt", { encoding: "utf-8" })
  .trim();

let groups = data.toString().split(/\r\n/);

// PART 1
let sumOfCalories = 0;
let counter = 0;
groups.forEach((nr) => {
  const asNr = nr - 0;
  if (asNr === 0) {
    sumOfCalories = sumOfCalories >= counter ? sumOfCalories : counter;
    counter = 0;
  }
  counter += asNr;
});

console.log("PART 1: " + sumOfCalories);

// PART 2
sumOfCalories = [];
counter = 0;
groups.forEach((nr) => {
  const asNr = nr - 0;
  if (asNr === 0) {
    sumOfCalories.push(counter);
    counter = 0;
  } else {
    counter += asNr;
  }
});

sumOfCalories.sort((a, b) => b - a);

console.log(
  "PART 2: " + sumOfCalories[0] + sumOfCalories[1] + sumOfCalories[2]
);

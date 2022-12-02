let rd = require("fs").readFileSync("input.txt", { encoding: "utf-8" }).trim();

let data = rd.toString().split(/\r\n/);

// PART 1

const scoreMap = {
  A: {
    X: 4,
    Y: 8,
    Z: 3,
  },
  B: {
    X: 1,
    Y: 5,
    Z: 9,
  },
  C: {
    X: 7,
    Y: 2,
    Z: 6,
  },
};

const scoreMap2 = {
  A: {
    2: 4,
    3: 8,
    1: 3,
  },
  B: {
    1: 1,
    2: 5,
    3: 9,
  },
  C: {
    3: 7,
    1: 2,
    2: 6,
  },
};
let points = 0;

data.map((el) => {
  const round = el.split(" ");
  points += scoreMap[round[0]][round[1]];
});

console.log(points);
const mapping = (value) => {
  switch (value) {
    case "X":
      return 1;
      break;
    case "Y":
      return 2;
      break;
    case "Z":
      return 3;
      break;
    default:
      return 0;
      break;
  }
};

points = 0;
// PART 2
data.map((el) => {
  const round = el.split(" ");
  points += scoreMap2[round[0]][mapping(round[1])];
});

console.log(points);

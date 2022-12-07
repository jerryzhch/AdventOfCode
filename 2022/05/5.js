let rd = require("fs").readFileSync("input.txt", { encoding: "utf-8" }).trim();

let data = rd.toString().split(/\r?\n/);

// PART 1
const stacks = data.splice(0, 8);

const stackMap = [];
stacks.forEach((stack) => {
  let stackHorizontal = [];
  for (let i = 0; i < stack.length; i += 4) {
    stackHorizontal.push(stack.substring(i + 1, i + 2));
  }
  stackMap.push(stackHorizontal);
});
stackMap.push(...Array(40).fill([]));

const movements = data.splice(9);

movements.forEach((move) => {
  const nrs = [...move].reduce((x, y) => (check(y) ? x + y : x), "");
  const amount = move.substring(5, 7).trim() - 0;
  const from = move.substring(12, 14).trim() - 0;
  const to = move.substring(17, 19).trim() - 0;

  for (let i = 0; i < amount; i++) {}

  console.log([amount, from, to]);
});
console.log(stackMap);
function check(x) {
  return "0123456789".includes(x) ? true : false;
}

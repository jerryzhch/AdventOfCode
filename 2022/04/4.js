let rd = require("fs").readFileSync("input.txt", { encoding: "utf-8" }).trim();

let data = rd.toString().split(/\n/);

// PART 1
let points = 0;
let points2 = 0;
data.map((el) => {
  const pairs = el.split(",");
  const pair1 = pairs[0].split("-");
  const pair2 = pairs[1].split("-");
  const [p1s, p1e, p2s, p2e] = [+pair1[0], +pair1[1], +pair2[0], +pair2[1]];
  if ((p1s <= p2s && p1e >= p2e) || (p1s >= p2s && p1e <= p2e)) points++;

  if (p1e >= p2s && p2e >= p1s) points2++;
});
console.log(points);

console.log(points2);

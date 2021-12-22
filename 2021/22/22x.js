const fs = require('fs');
const input = fs
  .readFileSync('input.txt')
  .toString()
  .replace(/\r/g, '')
  .split('\n')
  .map((l) => {
    const [cmd, bounds] = l.split(' ');
    return {
      cmd,
      cuboid: bounds.split(',').map((s) =>
        s
          .substring(2)
          .split('..')
          .map((s) => parseInt(s))
      ),
    };
  });

const countCubes = (instructions) => {
  const cuboids = instructions.reduce((cuboids, instr) => {
    return [...cuboids.flatMap((c) => difference(c, instr.cuboid)), ...(instr.cmd === 'on' ? [instr.cuboid] : [])];
  }, []);
  return cuboids.map((c) => c.reduce((r, [l, h]) => r * (h - l + 1), 1)).reduce((r, c) => c + r, 0);
};

const difference = (cuboid, other) => {
  const overlap = cuboid.map((b, i) => [Math.max(other[i][0], b[0]), Math.min(other[i][1], b[1])]).filter(([l, h]) => h >= l);
  if (overlap.length === 3) {
    return splitByExcluding(cuboid, overlap);
  } else {
    return [cuboid];
  }
};

const splitByExcluding = (cuboid, overlap, c = 0) => {
  const remainders = [
    [cuboid[c][0], overlap[c][0] - 1],
    [overlap[c][1] + 1, cuboid[c][1]],
  ]
    .filter(([b1, b2]) => b2 >= b1)
    .map((b) => changedCoordinate(cuboid, c, b));
  return [...remainders, ...(c < 2 ? splitByExcluding(changedCoordinate(cuboid, c, overlap[c]), overlap, c + 1) : [])];
};

const changedCoordinate = (cuboid, c, newBounds) => Object.assign([...cuboid], { [c]: newBounds });

console.log(countCubes(input.slice(0, 20)));
console.log(countCubes(input));

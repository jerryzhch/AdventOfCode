let rd = require("fs").readFileSync("input.txt", { encoding: "utf-8" }).trim();

let data = rd.toString().split(/\r\n/);

// PART 1
let points = 0;
data.map((el) => {
  const sub1 = el.slice(0, el.length / 2);
  const sub2 = el.slice(el.length / 2, el.length);

  let foundChars = new Set();
  for (let i = 0; i < sub2.length; i++) {
    const result = sub1.search(sub2.charAt(i));
    if (result >= 0) {
      foundChars.add(sub2.charAt(i));
    }
  }

  foundChars.forEach((char) => {
    let ascii = char.charCodeAt(0);

    if (ascii < 91) ascii = ascii - 38;
    else ascii = ascii - 96;
    points += ascii;
  });
});
console.log(points);

// PART 2
points = 0;

for (let i = 0; i < data.length; i += 3) {
  const s1 = data[i];
  const s2 = data[i + 1];
  const s3 = data[i + 2];

  let foundChars = new Set();
  for (let j = 0; j < s2.length; j++) {
    const result = s1.search(s2.charAt(j));
    if (result >= 0) {
      for (let k = 0; k < s3.length; k++) {
        const result = s1.search(s3.charAt(k));
        if (result >= 0) {
          if (s2.charAt(j) == s3.charAt(k)) foundChars.add(s3.charAt(k));
        }
      }
    }
  }
  foundChars.forEach((char) => {
    let ascii = char.charCodeAt(0);

    if (ascii < 91) ascii = ascii - 38;
    else ascii = ascii - 96;
    points += ascii;
  });
}

console.log(points);

var standard_input = process.stdin;
// Set input character encoding.
let dataArr = [];
standard_input.setEncoding("utf-8");
// Prompt user to input data in console.
console.log("Please input text in command line.");
// When user input data and click enter key.
standard_input.on("data", function (data) {
  // User input exit.
  let binaryString = "";
  let binaryString2 = "";
  let oxygen = [];
  let co2 = [];
  let counter = 0;
  let filtered = [];
  if (data.includes("exit")) {
    oxygen = [...dataArr];
    co2 = [...dataArr];
    for (let i = 0; i < dataArr[0].length; i++) {
      dataArr.forEach((el) => {
        const number = el[i] - 0;
        if (number == 1) {
          ++counter;
        } else {
          --counter;
        }
      });
      if (counter > 0) {
        binaryString += "1";
        binaryString2 += "0";
      } else {
        binaryString += "0";
        binaryString2 += "1";
      }
      counter = 0;
    }
    while (oxygen.length > 2) {
      oxygen.forEach((el) => {
        const number = el[0] - 0;
        if (number == 1) {
          ++counter;
        } else {
          --counter;
        }
      });
      if (counter >= 0) {
        oxygen.forEach((el) => {
          if (el[0] == 1) {
            filtered.push(el);
            console.log(el);
          }
        });
      } else {
        oxygen.forEach((el) => {
          if (el[0] == 0) {
            filtered.push(el);
            console.log(el);
          }
        });
      }
      oxygen = [...filtered];
      filtered = [];
      counter = 0;
    }
    while (co2.length > 2) {
      co2.forEach((el) => {
        const number = el[0] - 0;
        if (number == 1) {
          ++counter;
        } else {
          --counter;
        }
      });
      if (counter >= 0) {
        co2.forEach((el) => {
          if (el[0] == 1) {
            filtered.push(el);
          }
        });
      } else {
        co2.forEach((el) => {
          if (el[0] == 0) {
            filtered.push(el);
          }
        });
      }
      co2 = [...filtered];
      filtered = [];
      counter = 0;
    }
    var decimal1 = parseInt(binaryString, 2);
    var decimal2 = parseInt(binaryString2, 2);
    console.log(decimal1 * decimal2);
    process.exit();
  } else {
    dataArr.push(data);
  }
});

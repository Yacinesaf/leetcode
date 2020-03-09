// let input = ["5", "2", "C", "D", "+"];
let input = ["5", "-2", "4", "C", "D", "9", "+", "+"];

function settingUpForTheSum(arr) {
  let lowered = arr.map(x => x.toLowerCase());
  let copy = [...lowered].map((e, index) => {
    if (!isNaN(parseInt(e))) {
      return parseInt(e);
    } else {
      return e;
    }
  });
  lowered.forEach((x) => {
    if (x === 'c') {
      copy.splice(lowered.indexOf(x) - 1, 2);
    }
    if (x === 'd') {
      copy[copy.indexOf(x)] = copy[copy.indexOf(x) - 1] * 2;
    }
    if (x === '+') {
      copy[copy.indexOf(x)] = copy[copy.indexOf(x) - 1] + copy[copy.indexOf(x) - 2];
    }
  });
  return copy
}
// settingUpForTheSum(input)

function sum(arr) {
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  return arr.reduce(reducer)
}
console.log(sum(settingUpForTheSum(input)))
//start doing the sum by verifying if the element is valid;

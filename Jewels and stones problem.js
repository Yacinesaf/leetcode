let j = "aABbc"
let s = "aAAcccBbbbb"

function numJewelsInStones(j, s) {
  let jewelsCount = 0;
  let jewelsArr = Array.from(j);
  let stonesArr = Array.from(s);
  for(let i = 0; i < stonesArr.length; i++) {
    for(let o = 0; o < jewelsArr.length; o++) {
      if(stonesArr[i] == jewelsArr[o]) {
        jewelsCount += 1;
      }
    }
  }
  return jewelsCount
};
console.log(numJewelsInStones(j,s))
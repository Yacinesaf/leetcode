function EquivalentKeypresses(strArr) {
  let copy = [...strArr];
  let copyArr = copy.map(x => Array.from(x));
  for (let i = 0; i < strArr.length; i++) {
    for (let o = 0; o < strArr[i].length; o++) {
      if (strArr[i][o] === '-') {
        let index = strArr[i].indexOf(strArr[i][o]);
        copyArr[i].splice(index - 2, 5)
      }
    }
  }
  let joined = copyArr.map(x => x.join(''));

  for (let j = 1; j < joined.length; j++) {
    if(joined[0] !== joined[j]){
      return false
    }
  }
  return true

}

// keep this function call here 
let strArr = ["c,a,r,d", "c,a,a,-B,r,d"];
console.log(EquivalentKeypresses(strArr));
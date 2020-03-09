let str = 'abbacxcga'
function removeDuplicates (s) {
    let sArr = Array.from(s);
    let i = 0;
    let newArr = sArr; 
    while(i < sArr.length) {
      if(sArr[i] === sArr[i + 1]) {
        newArr.splice(i,2);
        i = 0;
      } else {
        i++;
      }
    }
    return newArr.join('')
  };
console.log(removeDuplicates(str))
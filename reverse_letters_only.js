let input = "Test1ng-Leet=code-Q!";
// let input = "Hello";
function nonLettersObject (str) {
let object = {};
let arr = Array.from(str);
let regex = RegExp('[a-zA-Z]');
for(let i = 0; i < arr.length; i++) {
  if(!regex.test(arr[i])) {
    object[i] = arr[i];
  }
}
return object
}
// console.log(nonLettersObject(input))

function reversing(str) {
  let arr = Array.from(str);
  let obj1 = nonLettersObject(str);
  let regex = RegExp('[a-zA-Z]');
  let objKeys = Object.keys(obj1);
  let lettersReversed = arr.filter(x => regex.test(x)).reverse();

  objKeys.forEach(x => lettersReversed.splice(x,0,obj1[x]));
  // console.log(lettersReversed)
  return lettersReversed.join('')
}
console.log('Qedo1ct-eeLg=ntse-T!')
console.log(reversing(input,nonLettersObject(input)));
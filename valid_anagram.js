let oo = 'rat';
let qo = 'car';

function isValidAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }
  let sorted1 = str1.split('').sort();
  let sorted2 = str2.split('').sort();

  for (let i = 0; i < sorted1.length; i++) {
    if(sorted1[i] !== sorted2[i]){
      return false
    }
  }
  return true
}

console.log(isValidAnagram(oo,qo))
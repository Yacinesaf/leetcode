let input = [1,1,1,3,3,4,3,2,4,2]

function doesContainsDupe(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in obj) {
      obj[arr[i]]++
    } else {
      obj[arr[i]] = 1;
    }
  }
  for (let j = 0; j < arr.length; j++) {
    let curr = arr[j];
    console.log(obj[curr])
    if(obj[curr] <= 1) {
      return false
    }
  }
  return true
}

console.log(doesContainsDupe(input))
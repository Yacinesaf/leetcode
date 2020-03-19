let is = [8,1,2,2,3];

function isSmall(arr) {
  let obj = {};
  for(let i= 0; i< arr.length; i++) {
    if(2 in obj) {
      obj['two'] = 0;
    }
    obj[arr[i]] = 0
  }
  let current = 0
  while (current < is.length) {
    for(let j = 1; j <= arr.length-1; j++) {
      if(arr[current] === 2 && arr[current+1] === 2) {
        current++
      }
      if(arr[current] > arr[j]) {
        obj[arr[current]] +=1
      }
    }
    current++
  }
  console.log(obj)
}

// isSmall(is)


let dd = is.map(x => {
  let copy = is.map(y => y - x)
  return copy.filter(y => y < 0).length
})

console.log(dd)
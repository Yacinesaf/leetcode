let input = [1,3,2];
function isMonotonic(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    console.log(arr[i], arr[i+1])
    console.log(arr[i] === arr[i + 1] );
    console.log((diff(arr[i], arr[i + 1]) <= 1 && diff(arr[i], arr[i + 1]) > 0))
    console.log('-----------------------------------------------------------')
    if (arr[i] === arr[i + 1] || diff(arr[i], arr[i + 1]) === 1) {
      return true
    }
    console.log('done')
  }
  return false
}
console.log(isMonotonic(input))

function diff(x, y) {
  return Math.abs(x - y)
}
// console.log(diff(1,2))
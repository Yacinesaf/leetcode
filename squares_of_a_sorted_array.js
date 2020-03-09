var sortedSquares = function(arr) {
  let square = arr.map(x => x*x);
  let sorted = square.sort((a,b) => a - b)
  return sorted
}
console.log(sortedSquares([-7,-3,2,3,11]))
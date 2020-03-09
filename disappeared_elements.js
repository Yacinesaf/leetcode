let input = [4,3,2,7,8,2,3,1];

function disappearedElementsAre(arr) {
  let result= [];
  for(let i =1; i <= arr.length;i++) {
    if(!arr.includes(i)) {
      result.push(i)
    }
  }
  return result
}
console.log(disappearedElementsAre(input))
let input = [3,2,8,9,7,4,2,1,2,4];

function sorted(arr) {
  let result = arr.filter(x => x % 2 === 0);
  arr.forEach(x => {
    if(x % 2 !==0) {
      result.push(x);
    }
  })
  return result
};
console.log(sorted(input))
// let input = [1,2,3,3];
let input = [5,1,5,2,2,5,3,5,4];

function howManyTimeRepeated (arr) {
  let elementsRepeated = [];
  for(let i = 0; i < arr.length; i++) {
    let list = arr.filter(x => x === arr[i])
    elementsRepeated.push(list);
  }
  let sorted = elementsRepeated.sort((a,b) => {
    return b.length - a.length
  });
  return sorted[1][1]
};

console.log(howManyTimeRepeated(input))

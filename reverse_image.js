let input = [[1,1,0],[1,0,1],[0,0,0]];
let input1= [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]];

function reversing(arr) {
  let reversedArr = [];
  for(let i = 0; i < arr.length; i++) {
    let newArr = [];
    for(let o = arr[i].length-1; o >= 0; o--) {
      newArr.push(arr[i][o]);
    }
    reversedArr.push(newArr);
  }
  return reversedArr;
};

function flipping(arr) {
  let reversed = reversing(arr);
  let result = [];
  for(let i =0; i < reversed.length; i++) {
    result.push(reversed[i].map(x => {
      if(x === 0) {
        return x = 1;
      }else {
        return  x = 0; 
      }
    }))
  }
  return result;
}

console.log(flipping(input1));

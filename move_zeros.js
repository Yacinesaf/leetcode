let input = [0,1,0,3,12];

function zerosMoved(arr) {
  let filtred = arr.filter(x => x !==0);
  let numOfZerosRemoved = arr.length - filtred.length;
  for(let i = 0; i< numOfZerosRemoved; i++){
    filtred.push(0);
  }
  return filtred
}

console.log(zerosMoved(input));
let input = [73, 74, 75, 71, 69, 72, 76, 73];

function daysToWaitForWarm(arr) {
  let daysToWait = [];
  let j = 1;
  for(let i =0; i < arr.length-1; i++) {
    if(arr[j] > arr[i]) {
      daysToWait.push(j - i);
      j +=1;
    } else if (arr[j] < arr[i]) {
      
    }
  }
  console.log(daysToWait)
}
daysToWaitForWarm(input)
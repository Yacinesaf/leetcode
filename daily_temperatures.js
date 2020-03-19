let input = [73, 74, 75, 71, 69, 72, 76, 73];

function daysToWaitForWarm(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    while (arr[j] < arr[i]) {
      j++
    }
    array.push(j - i)
  }
  return array
}
console.log(daysToWaitForWarm(input))
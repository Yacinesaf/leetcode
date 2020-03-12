let num = 6
function divsorGame(num) {
  let arr = [];
  for(let i = 1; i < num; i++) {
    arr.push(i)
  }
  console.log(arr)
  let sorted = (arr.filter(x => num % x === 0)).sort((a,b) => b-a)
  console.log(sorted);
}

divsorGame(num)
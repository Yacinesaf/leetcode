function sum(arr, l, r) {
  let sum = 0;
  let filtered = arr.filter(x => x >=l && x <= r)
  for(let i = 0; i < filtered.length; i++) {
    sum += filtered[i];
  }
  return sum
}

console.log(sum([10,5,15,3,7,13,18,1,null,6], 6, 10))
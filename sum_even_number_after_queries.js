function sumEvenQeuries(arr, queries) {
  let result = [];
  
  for(let i = 0; i < arr.length; i++) {
    let count = 0;
    let index = queries[i][1];
    let numToAdd = queries[i][0];
    arr[index] = arr[index] + numToAdd;
    let filtered = arr.filter(x => x%2 === 0);
    for(let o = 0; o < filtered.length; o++) {
      count +=filtered[o];
    }
    result.push(count)
  }
  return result
}
console.log(sumEvenQeuries([1,2,3,4],[[1,0],[-3,1],[-4,0],[2,3]]))
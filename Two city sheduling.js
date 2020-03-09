// CHECK CANDIES DISTRUBUTE, N-th Tribonacci 

let arr = [[10,20],[30,200],[400,50],[30,20],[30,200,4444],[4000,54440],[310,20]];
// console.log(arr);
function twoCitySchedCost (arr) {
  let lowCosts = [];  
  for(let i = 0; i < arr.length; i++) {
    let min = arr[i][1];
    for(let o = 0; o < arr[i].length; o++) {
      if(arr[i][o] < min) {
        min = arr[i][o];
      }
    }
    lowCosts.push(min)
  }
  let costAdd = 0;
  for(let i = 0; i < lowCosts.length; i++) {
    costAdd = costAdd + lowCosts[i];
  }
  return costAdd;
  
}
twoCitySchedCost(arr)
console.log("TCL: twoCitySchedCost(arr)", twoCitySchedCost(arr))

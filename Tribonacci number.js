function tribo(x) {
  let arr = [0,1,1];
  for(let i = 3; i <= x; i++) {
    arr[i] = arr[i-3] + arr[i-2] + arr[i-1]
  }
  return arr[x]
}




//Version islam
// function T(n) {
//   let l = [0,1,1]
//   if (n < 3) return l[n]
//   else {
//     j = n - 3
//     return l[0] + (j+1)*(l[1] + l[2])
//   }
// }





// var t01 = performance.now();
// console.log("Isramu-Sama: ", T(2000))
// var t11 = performance.now();

// var t0 = performance.now();
// console.log("Yahsin: ", tribo(2000))
// var t1 = performance.now();

// console.log("yacine " + (t1 - t0) + " milliseconds.")
// console.log("islam " + (t11 - t01) + " milliseconds.")
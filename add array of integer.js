let a = [2,7,4];
let k = 181;
var addToArrayForm = function (A, K) {
  let aNum = parseInt(A.join(''));
  let add = aNum + K;
  let result = (add).toString().split("").map(function(t){return parseInt(t)});
  return result
};
console.log(addToArrayForm(a,k));
// function same(arrA, arrB) {
//     let sortedA = arrA.map(x => x*x).sort()
//     let sortedB = arrB.sort()
//     for(let i = 0; i < sortedA.length; i++){
//       if(sortedA[i] !== sortedB[i]) {
//         return false
//       }
//     }
//     return true
//   }
// console.log(same([1,2,3],[9,1]))


//------------------------------------
//FREQUENCY COUNTER MY VERSION
//check if the second string has the same letter and the same amount 
// loop over the two strings and create objects that counts the number of occurances for each letter

// ---------------------------------
// function anagrams(strA,strB) {
//   if(strA.length !== strB.length) {
//     return false
//   }
//   let sortedA = strA.split('').sort();
//   let sortedB = strB.split('').sort();
//   let objA = {};
//   let objB = {};
//   sortedA.forEach(element => {
//     if(element in objA) {
//       objA[element] +=1;
//     } else {
//       objA[element] = 1;
//     }
//   });
//   sortedB.forEach(element => {
//     if(element in objB) {
//       objB[element] +=1;
//     } else {
//       objB[element] = 1;
//     }
//   });
//   let keys = Object.keys(objA);
//   for(let i=0; i < keys.length; i++) {
//     if(objA[keys[i]] !== objB[keys[i]]) {
//       return false
//     }
//   }
//   return true 
// }
// console.log(anagrams('cinema','iceman'))

//------------------------------------------
//create an object that has a count for each value nad then print the object's length
//My version two pointers
// ---------------
// function countUniqueValues(arr) {
//   let obj = {}
//   arr.forEach(x => {
//     if(x in obj) {
//       obj[x]++
//     } else {
//       obj[x] = 1
//     }
//   });
//   return Object.keys(obj).length
// }
// console.log(countUniqueValues([1,1,5,5]))

// -------------------------

//COLT VERSION 

// function countUniqueValues(arr){
//   if(arr.length === 0) return 0;
//   var i = 0;
//   for(var j = 1; j < arr.length; j++){
//       if(arr[i] !== arr[j]){
//           i++;
//           arr[i] = arr[j]
//       }
//   }
//   return i + 1;
// }
// countUniqueValues([1,2,2,5,7,7,99])


// ----------------------------------------

// COLT VERSION SLIDING WINDOW

// ----------------------------------

// function maxSubarraySum(arr, num){
//   let maxSum = 0;
//   let tempSum = 0;
//   if (arr.length < num) return null;
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   tempSum = maxSum;
//   for (let i = num; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }
//   return maxSum;
// }

// maxSubarraySum([2,6,9,2,1,8,5,6,3],3)

function search(arr, num) {
  return arr.indexOf(num)
}
console.log(search([1,6,8,8,11],8))
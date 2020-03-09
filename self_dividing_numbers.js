function generateListNumbers(left, right) {
  let listNumbers = [];
  for (let i = left; i <= right; i++) {
    listNumbers.push(i)
  };
  return listNumbers
}

function splitNumber(num) {
  let strNum = num.toString(10);
  let splitNum = strNum.split('');
  return splitNum.map(x => parseInt(x));
}

function isSelfDividing(num) {
  let splitNum = splitNumber(num);
  let trueOrFalse = splitNum
    .map(x => num % x === 0 ? true : false)
  return trueOrFalse.includes(false) ? false : true
}


let listNumbers = generateListNumbers(1, 22);
console.log(listNumbers.filter(x => isSelfDividing(x)))









// function selfDividing(left, right) {
//   let filtered = listNumbersFiltred(left, right);
//   filtered.forEach(x => {
//     for (let i = 0; i < x.length; i++) {
//       for (let j = 0; j < listNumbers.length;)
//     }
//   })
// }

// function listNumbersFiltred(left, right) {
//   let list = [];
//   let arr = [];
//   for (let i = left; i <= right; i++) {
//     list.push([i + '']);
//   }
//   for (let o = 0; o < list.length; o++) {
//     for (let j = 0; j < list[o].length; j++) {
//       arr.push(list[o][j].split(''));
//     }
//   }
//   let filtred = arr.filter(x => !x.includes('0'))

//   return filtred
// }
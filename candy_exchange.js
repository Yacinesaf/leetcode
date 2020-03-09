let alice = [8, 2, 5];
let zoubir = [2, 3, 3, 1];
let aliceSum = sum(alice);
let zoubirSum = sum(zoubir);
let i = 0;
while (aliceSum !== zoubirSum) {
  let biggerAr = biggerArr(alice, zoubir);
  let smallAr = smallArr(alice, zoubir);
  let sameLength = (sum(biggerAr) + sum(smallAr)) / 2;
  let diff = Math.abs(sameLength - sum(biggerAr))
  let copyBig = [...biggerAr];
  let copySmall = [...smallAr];
  let theOnes = [];
  if (i < 5) {
    i++
  } else {
    break
  }
  console.log(FindingWhichToExchange(copyBig, copySmall, diff, theOnes))
  console.log(copyBig)
}


function sum(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}
function biggerArr(arrA, arrB) {
  if (sum(arrA) > sum(arrB)) {
    return arrA
  } else {
    return arrB
  }
}
function smallArr(arrA, arrB) {
  if (sum(arrA) < sum(arrB)) {
    return arrA
  } else {
    return arrB
  }
}



function FindingWhichToExchange(arrA, arrB, diff, ones) {
  let closestIndex = arrA.indexOf(arrA.reduce(function (prev, curr) {
    return (Math.abs(curr - diff) < Math.abs(prev - diff) ? curr : prev);
  }))
  theOnes = ones.push(arrA[closestIndex])
  copySmall = arrB.push(arrA[closestIndex]);
  copyBig = arrA.splice(closestIndex, 1);
  aliceSum = sum(arrA);
  zoubirSum = sum(arrB);

  return ones
}

// console.log(FindingWhichToExchange(biggerArr(alice, zoubir), smallArr(alice, zoubir)))
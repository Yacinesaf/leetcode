function single(arr) {
  // let arrCopy = [...arr];
  let objectCount = {};
  for(let i=0; i< arr.length;i++) {
    if(!(arr[i] in objectCount)) {
      objectCount[arr[i]] = 1;
    } else {
      objectCount[arr[i]] +=1;
    }
  }
  let objectKeys = Object.keys(objectCount);

  let found = objectKeys.find(x => objectCount[x] === 1);
  return found
  // return arrCopy
}

console.log(single([4,1,2,1,2]))
// [[stuff], [stuff2]]

// let l = []
// let a =[4,1,2,1,2]
// Array(4,1,2,1,2).forEach(element => {
//   let i = l.findIndex(x => x.includes(element))
//   if (i > -1) l[i].push(element)
//   else l.push([element])
// });

// console.log(l.find(x => x.length === 1)[0]);


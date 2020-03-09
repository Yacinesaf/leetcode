// let list = [[0,2]]; // 0
let list = [[2,1,1],[0,1,1],[1,0,1]]; // -1
// let list = [[2, 1, 1], [1, 1, 0], [0, 1, 1]];
let count = -1;
let adjacents = [1]

function nonRottenOranges(list) {
  let filtee = list.filter(x => x.includes(1))
  return !!filtee.length
}


function whosRotten(oranges) {
  let rottenList = [];
  for (let i = 0; i < oranges.length; i++) {
    for (let j = 0; j < oranges[i].length; j++) {
      if (oranges[i][j] === 2) {
        rottenList.push([i, j])
      }
    }
  }
  return rottenList
}

function whosAdjacent(rottenList, og) {
  let adjacents = [];
  let ylength = og.length - 1
  let xlength = og[0].length - 1

  for (let k = 0; k < rottenList.length; k++) {
    let currentRottenCo = rottenList[k];
    if (currentRottenCo[1] > 0) {
      adjacents.push([currentRottenCo[0], currentRottenCo[1] - 1])
    }
    if (currentRottenCo[1] < xlength) {
      adjacents.push([currentRottenCo[0], currentRottenCo[1] + 1])
    }
    if (currentRottenCo[0] > 0) {
      adjacents.push([currentRottenCo[0] - 1, currentRottenCo[1]])
    }
    if (currentRottenCo[0] < ylength) {
      adjacents.push([currentRottenCo[0] + 1, currentRottenCo[1]])
    }
  }
  let filtered = adjacents.filter(x => {
    return og[x[0]][x[1]] === 1
  });
  return filtered
}

function youreAboutToGetRotten(adjacents, og) {
  for (let i = 0; i < adjacents.length; i++) {
    if (og[adjacents[i][0]][adjacents[i][1]] === 1) {
      og[adjacents[i][0]][adjacents[i][1]] = 2;
    }
  }
}

while (adjacents.length !== 0) {
  let rotten = whosRotten(list)
  let adjacentToRot = whosAdjacent(rotten, list)
  
  if(nonRottenOranges(list) && !adjacentToRot.length) {
    count = -1
    break;
  }
  count += 1;
  youreAboutToGetRotten(adjacentToRot, list);
  adjacents = adjacentToRot;
}
console.log('It took ' + count + ' minutes to rot every orange.')















// let updatedList;
// function whichOneIsRotten(arr) {
//   let rottenIndex;
//   let rottenList;
//   let rottenListIndex;
//   for (let i = 0; i < list.length; i++) {
//     if (list[i].includes(2)) {
//       rottenList = list[i];
//       rottenListIndex = list.indexOf(rottenList)
//       for (let o = 0; o < rottenList.length; o++) {
//         if (rottenList[o] === 2) {
//           rottenIndex = o;
//         }
//       }
//     }
//   }
//   return [rottenIndex, rottenListIndex]
// }
// let adjacentToRotList;
// function adjacentToRot(arr) {
//   let rot = whichOneIsRotten(arr);
//   // console.log(rot);
//   for(let i = 0; i < arr.length; i++) {
//     // console.log(arr[i]);
//     for(let o = 0; o < arr[i].length; o++) {
//       console.log(arr[i][o])
//       if(arr[i] == rot[1] ) {

//       }
//     }
//   }
// }

// adjacentToRot(list)
// let cordinates = [];
// function turningToCoordinates(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let o = 0; o < arr[i].length; o++) {
//       let lists = [];
//       lists.push(o, i)
//       cordinates.push(lists)
//     }

//   }
//   return cordinates
// }

// function whichOneIsRotten(arr) {
//   let cordinates = turningToCoordinates(arr);
//   let rotten;
//   for (let i = 0; i < cordinates.length; i++) {
//     rotten = cordinates[i].filter(y => y === 2);
//   }
//   return rotten
// }

// console.log(whichOneIsRotten(list))
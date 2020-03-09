let root = [1,2,3,4]
let depth = Math.floor(Math.sqrt(root.length))

let numberOfElementsPerDepth = []
for(let i = 0; i <= depth ; i++) {
  numberOfElementsPerDepth.push(Math.pow(2, i))
}

let groups = []
let currentIndex = 0 
numberOfElementsPerDepth.forEach((nbr, index) => {
  groups[index] = []
  for(let i = currentIndex; i < root.length ; i++) {
    if(groups[index].length < nbr) {
      groups[index].push(root[i])
      currentIndex += 1
    }
  }
});

console.log(groups);


function findDepth(element) {
  return groups.findIndex(x => x.includes(element))
}

function findParent(element) {
  let depthOfElement = findDepth(element) 
  let depthOfParent = depthOfElement - 1

  if (depthOfParent < 0) return "Adam"
  let indexOfElement = groups[depthOfElement].findIndex(x => x === element)
  let indexOfParent = Math.floor( indexOfElement/ 2)
  return groups[depthOfParent][indexOfParent]
}


// console.log("Depth: " + findDepth(1));
// console.log("Parent: " + findParent(1));
console.log("Cousins? " + areCousins(4, 3));

function areCousins(x, y) {
  return findDepth(x) === findDepth(y) && findParent(x) !== findParent(y)
}
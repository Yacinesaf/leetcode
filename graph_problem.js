function distance(pointA, pointB) {
  return Math.hypot(pointB[0] - pointA[0], pointB[1] - pointA[1])
}

function direction(point, direction) {
  switch (direction) {
    case 'up':
      return [point[0], point[1] + 1];
    case 'left':
      return [point[0] - 1, point[1]];
    case 'down':
      return [point[0], point[1] - 1];
    case 'right':
      return [point[0] + 1, point[1]];
    case 'up left':
      return [point[0] - 1, point[1] + 1];
    case 'up right':
      return [point[0] + 1, point[1] + 1];
    case 'down left':
      return [point[0] - 1, point[1] - 1];
    case 'down right':
      return [point[0] + 1, point[1] - 1];
  }
}
let directions = ['up', 'left', 'down', 'right', 'up left', 'up right', 'down left', 'down right'];

function bestMove(pointA, pointB) {
  let directionsCoordinates = directions
    .map(element => direction(pointA, element));
  let directionsDistance = directionsCoordinates.map(element => distance(element, pointB));
  return directionsCoordinates[indexShortest(directionsDistance)];
}

function indexShortest(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return arr.indexOf(min)
}

function areEqual(list1, list2) {
  for(let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i]) return false 
  }
  return true
}

let points = [[1, 1], [3, 4], [-1, 0]];
let count = 0;

for (let i = 0; i < points.length - 1; i++) {
  let pointA = [...points[i]]
  let pointB = [...points[i+1]]

  let current = pointA;
  while(!areEqual(current,pointB)) {
    current = bestMove(current,pointB);
    count += 1;  
  }
}

console.log(count);

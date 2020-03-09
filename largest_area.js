let points = [[0, 0], [0, 1], [1, 0], [0, 2], [2, 0],[4,0],[0,10]];

function biggestDistances(arr) {
  let firstPoint = arr[0];
  let distances = [];
  for (let i = 1; i < points.length; i++) {
    distances.push(Math.hypot(arr[i][0] - firstPoint[0], arr[i][1] - firstPoint[1]));
  }
  let sorted = distances.sort((a,b) => b-a);
  while(sorted.length > 2){
    let min = sorted[0];
    sorted.forEach((x, index) => {
      if (x < min) {
        min = x
        sorted.splice(index, 1);
      }
    });
  }

  return sorted
}
console.log(biggestDistances(points))

function largestArea(distances) {
  return(distances[0]/2)*distances[1];
}
console.log(largestArea(biggestDistances(points)))
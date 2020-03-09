function distributeCandies(candies, num_people) {
  let candiesLeft = candies;
  let arr = [];
  for (let o = 0; o < num_people; o++) {
    arr.push(0)
  }
  while (candiesLeft > 0) {
    let last = arr[arr.length - 1];
    for (let i = 0; i < num_people; i++) {
      if (candiesLeft > (i + 1 + last)) {
        arr[i] = arr[i] + (i + 1 + last);
        candiesLeft -= (i + 1 + last);
      } else {
        arr[i] += candiesLeft;
        candiesLeft = 0;
        break;
      }
    }
  }
  return arr
};

console.log(distributeCandies(500, 1));
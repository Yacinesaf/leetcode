function swap(a, b) {
  let result = [];
  for(let i = 0; i < a.length; i++) {
    for(let o = 0; o < b.length; o++) {
      if(a[i] === b[o]) {
        result.push(o);
      }
    }
  }
  return result
}
console.log(swap([12, 28, 46, 32, 50], [50, 12, 32, 46, 28]))

let arr = [1, 0, 2, 3, 0, 4, 5, 0];
// let arr = [1, 2, 3];
function zeroDuplicate() {
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] === 0) {
      arr.splice(i, 0, 0)
      i++
    }
    if (arr.length >= 9) {
      arr.pop()
    }
  }
}
zeroDuplicate();
console.log(arr)
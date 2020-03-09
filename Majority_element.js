let input = [2,2,1,1,1,2,2];

function majorityElementis(arr) {
  let majority = arr.length / 2;
  let obj = {}
  for (let i = 0; i < arr.length; i++) {
    arr[i] in obj ? obj[arr[i]]++ : obj[arr[i]] = 1
  }
  let keys = Object.keys(obj);
  for (let j = 0; j < keys.length; j++) {
    if(obj[keys[j]] > majority) {
      return keys[j]
    }
  }
}
console.log(majorityElementis(input))
function LetterChanges(str) { 
  let alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
  let vowels = ('aeiouy').split('');
  let strArr = Array.from(str.toLowerCase());
  for(let i = 0; i < strArr.length; i++) {
    let index = alphabet.indexOf(strArr[i]);
    if(alphabet.includes(strArr[i])) {
      strArr[i] = alphabet[index+1]
    }
  }
  for (let o = 0; o < strArr.length; o++) {
    
  }
  let result = strArr.map(x => {
    if(vowels.includes(x)) {
      return x.toUpperCase();
    }else {
      return x
    }
  })
  return result.join("")
}



console.log(LetterChanges('hello*3'))
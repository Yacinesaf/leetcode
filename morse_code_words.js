let morseObject = {
  a : ".-",
  b : "-...",
  c : "-.-.",
  d : "-..",
  e : ".",
  f : "..-.",
  g : "--.",
  h : "....",
  i : "..",
  j : ".---",
  k : "-.-",
  l : ".-..",
  m : "--",
  n : "-.",
  o : "---",
  p : ".--.",
  q : "--.-",
  r : ".-.",
  s : "...",
  t : "-",
  u : "..-",
  v : "...-",
  w : ".--",
  x : "-..-",
  y : "-.--",
  z : "--.."
};

let words = ["gin", "zen", "gig", "msg"];

// let morseKeys =   Object.keys(morseObject);

function lowercase(arr) {
  
  return arr.map(x => x.toLowerCase());
}

function toMorse(arr) {
  let loweredArr = lowercase(arr);
  let splited = loweredArr.map(x => x.split(''));
  let morsed = [];
  for(let i= 0; i< splited.length; i++) {
    morsed.push(splited[i].map(x => x = morseObject[x])); 
  }
  return morsed.map(x => x.join(''))
  
};

function comparingForDiff(arr) { 
  let morsed = toMorse(arr);
  let first = morsed[0];
  let filtred = morsed.filter(x => first !== x);
  return filtred
}

console.log(comparingForDiff(words))
let robotStartingPosition = [0,0];
let directions= 'll'
function willReturnToOrigin(origin,str) {
  let lowered = str.toLowerCase();
  let strArr =  lowered.split('');
  let currentPosition = [...origin];
  for(let i = 0; i < strArr.length; i++) {
    if(strArr[i] === 'u') {
      currentPosition[1]+= 1
    }else if(strArr[i] === 'd') {
      currentPosition[1] -=1;
    }else if(strArr[i] === 'r') {
      currentPosition[0] +=1;
    }else if(strArr[i] === 'l') {
      currentPosition[0]-=1;
    }
  }
  for(let i = 0; i < currentPosition.length; i++) {
    if (currentPosition[i] !== robotStartingPosition[i]) return false 
  }
  return true
}

console.log(willReturnToOrigin(robotStartingPosition, directions))
let newArr=[]
function confirmEnding(str, target) {
    let strArr=str.split('')
    for(let i=target.length;i>0;i--){
        let result=strArr[str.length-i]
        newArr.push(result);                 
}
let targetArr=target.split('');
console.log(JSON.stringify(newArr)==JSON.stringify(targetArr));
}
confirmEnding("Open sesame", "sage");



function repeatStringNumTimes(str, num) { 
    let repeatedString=''
  for (let i=0;i<num;i++){
     repeatedString+=str 
  }
  return repeatedString 
}
console.log(repeatStringNumTimes("abc", 3));


function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + "..." : str;
  }
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));


function findElement(arr, func) {
    let num = 0;
  
    for (let i = 0; i < arr.length; i++) {
      num = arr[i];
      if (func(num)) {
        return num;
      }
    }
  
    return undefined;
  }
  console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));



function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
      updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
  }
  
  console.log(titleCase("I'm a little tea pot"));
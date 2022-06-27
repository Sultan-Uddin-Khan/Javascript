//Problem 1
function sumAll(arr) {
    let min = Math.min(...arr)
    let max=Math.max(...arr) 
     let sum=0;
     for(let i=min;i<=max;i++){
      sum=sum+i;
     }
     return sum;  
}
  
  console.log(sumAll([5, 10]));


  //Problem 2
  function diffArray(arr1, arr2) {
    let newArr = [];
        for(let i = 0; i < arr1.length; i += 1) {
               if(arr2.indexOf(arr1[i]) ==-1){
                newArr.push(arr1[i]);
            } }
            for(let j=0;j<arr2.length;j+=1){
            if(arr1.indexOf(arr2[j]) ==-1){
                newArr.push(arr2[j]);
            }}
            
    return newArr;
  }
  
  console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));

  //Problem 3
  
  function destroyer(arr) {
    
    var args = Array.prototype.slice.call(arguments);
    function temp(value) {
         return args.indexOf(value) === -1;
    }
    return args[0].filter(temp);   
}
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));




//Problem 4
function whatIsInAName(collection, source) {
  let arr = [];
  
  // Only change code below this line
  let keysToCheck = Object.keys(source);
  arr = collection.filter(function(item) {
    // check if every key in the item exist as property and have the good value
     return keysToCheck.every(function(key) {
       return item.hasOwnProperty(key) && item[key] === source[key];
     });
  });
  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, 
{ first: "Mercutio", last: null },{ first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));


//Problem 5
function spinalCase(str) {
  // Replace low-upper case to low-space-uppercase 
  str = str.replace(/([a-z])([A-Z])/g, function(match, s1, s2){
    return s1 + '  ' + s2
  });
  console.log(str)
  // Split on whitespace and underscores and join with dash
  return str.toLowerCase().split(/(?:_| )+/).join("-");
}
console.log(spinalCase("thisIsSpinalTap"));
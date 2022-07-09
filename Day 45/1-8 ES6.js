//Problem 1
function checkScope() {
    let i = 'function scope';
    if (false) {
      i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
  console.log(checkScope());

  //Problem 2
  const s = [5, 7, 2];
function editInPlace() {
  
  // Only change code below this line
   s[0]=2
   s[1]=5
   s[2]=7
   return s;
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
console.log(editInPlace());

//Problem 3
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
   
     Object.freeze(MATH_CONSTANTS)
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();
  console.log(PI)

  //Problem 4
  const magic = ()=> {
    return new Date();
  };
  console.log(magic())

  //problem 5
  const myConcat =(arr1, arr2)=> 
   arr1.concat(arr2);
;

console.log(myConcat([1, 2], [3, 4, 5]));

//Problem 6
// Only change code below this line
const increment = (number,value=1) => number + value;
// Only change code above this line
console.log(increment(5,2))

//Problem 7
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(0,1,2))

//Problem 8
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

var findMedianSortedArrays = function(nums1, nums2) {
     let newArr=nums1.concat(nums2)
     let sortedArr=newArr.sort((a,b)=>a-b)
      if(sortedArr.length%2==0){
          return (sortedArr[(sortedArr.length/2)-1]+sortedArr[(sortedArr.length/2)])/2
     }
     else{
      return sortedArr[((sortedArr.length-1)/2)]
     }

};

console.log(findMedianSortedArrays([1,3],[2]));
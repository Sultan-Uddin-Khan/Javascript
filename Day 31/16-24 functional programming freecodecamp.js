  //Problem 16
  const squareList = arr => {
    // Only change code below this line
    const posArr = arr.filter(num => num > -1 && num==parseInt(num));
    return posArr.map(function (x) {
        return Math.pow(x, 2);
      });
    return arr;
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);
  console.log(squaredIntegers);

  //Problem 17
  function alphabeticalOrder(arr) {
    // Only change code below this line
  return arr.sort(function(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
    });
    return arr
    // Only change code above this line
  }
  
  console.log(alphabeticalOrder(["a", "a", "a", "a", "x", "t"]));

  //Problem 18
  var globalArray = [5, 6, 3, 2, 9];
  function nonMutatingSort(arr) {
    // Add your code below this line
    return [].concat(arr).sort(function(a, b) {
      return a - b;
    });
    // Add your code above this line
  }
  console.log(nonMutatingSort(globalArray));

  //Problem 19
  function splitify(str) {
    // Only change code below this line
  const byDigits = str.split(/[^A-Za-z0-9]/);
  return byDigits;
  
    // Only change code above this line
  }
  
  console.log(splitify("This.is.a-sentence"));

//Problem 20
function sentensify(str) {
    // Only change code below this line
      const newArr=str.split(/[^\w]/).join(' ');
      return newArr;
  
    // Only change code above this line
  }
  
  console.log(sentensify("May-the-force-be-with-you"));


  //Problem 21/1
// Only change code below this line
function urlSlug(title) {
    return title.toLowerCase().trim().split(/\s+/).join("-");
  }
  // Only change code above this line
  console.log(urlSlug(" Winter Is  Coming"));
//Problem 21/2
  // Only change code below this line
function urlSlug1(title) {
    return title.split(" ").filter(substr => substr !== "").join("-").toLowerCase();
  }
  // Only change code above this line
  console.log(urlSlug1(" Winter Is  Coming"));


  //Problem 22
  function checkPositive(arr) {
    // Only change code below this line
    const isPositive = (currentValue) => currentValue >= 0;
    return arr.every(isPositive);
    // Only change code above this line
  }
  
  console.log(checkPositive([1, 2, 3, -4, 5]));

   //Problem 23
   function checkPositive(arr) {
    // Only change code below this line
    const isPositive = (currentValue) => currentValue >= 0;
    return arr.some(isPositive);
    // Only change code above this line
  }
  
  console.log(checkPositive([-1, -2, -3, -4, -5]));

  //Problem 24
  function add(x) {
    // Only change code below this line
    return function(y) {
      return function(z){
       return x + y + z 
      }    
    }
    // Only change code above this line
  }
  console.log(add(11)(22)(33));

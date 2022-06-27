//Problem 12
function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
    return result;
  }
  console.log(sumFibs(10));

  //Problem 13(Solution 1)
  //An integer is prime if it is not divisible by any prime less than or equal to its square root
  function sumPrimes(num) {
    // Check all numbers for primality
    let primes = [];
    for (let i = 2; i <= num; i++) {
      if (primes.every((prime) => i % prime !== 0))
        primes.push(i);    
    }
    return primes.reduce((sum, prime) => sum + prime,0)
    ;
  }
  console.log(sumPrimes(10))

  //Problem 13(Solution 2)
  function sumPrimes1(num) {
    // Helper function to check primality
    function isPrime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0)
          return false;
      }
      return true;
    }
  
    // Check all numbers for primality
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i))
        sum += i;
    }
    return sum;
  }
  console.log(sumPrimes1(10))


  //Subsequence Problem
  function isValidSubsequence(array, sequence) {
    let j = 0 //set a variable equal to j, this represents the index of the sequence array
    for(i=0; i < array.length; i++){
    //if the number we are on in the first array matches the number we are on in the second array then add 1 to the variable j 
    if (array[i] === sequence[j]) {
          j++ //Add 1 to j
       }
    }
   if (j === sequence.length) {
    //if the final index of the sequence array is equal to the sequence's length then return true
   return true
  } else {
    //in all other cases return false
   return false
  }
 }
 console.log(isValidSubsequence([1,2,3],[2,3]))

 //Problem 14
 //Smallest Common Multiple
 function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);// sort the array in ascending order
  const numberDivisors = max - min + 1; //numbers used for the division.
  // Largest possible value for SCM
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}
console.log(smallestCommons([1, 5]));

//Problem 15
function dropElements(arr, func) {
  let newArr=[]
  for(let i=0;i<arr.length;i++){
    if(func(arr[i])){
     return newArr=arr.slice(i,arr.length)
 }
  }
 return newArr;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));

//Problem 16
function steamrollArray(arr) {
  return arr
    .toString()
    .replace(',,',',')// "1,2,,3" => "1,2,3"
    .split(",") // ['1','2','3']
    .map(function(v) {
      if (v == "[object Object]") {
        // bring back empty objects
        return {};
      } else if (isNaN(v)) {
        // if not a number (string)
        return v;
      } else {
        return parseInt(v); // if a number in a string, convert it
      }
    });
}
console.log(steamrollArray(([1, [2], [3, [[4]]]])))

//Problem 17
function binaryAgent(str) {
  var biString = str.split(" ");
  var uniString = [];

  /*using the radix (or base) parameter in parseInt, we can convert the binary
      number to a decimal number while simultaneously converting to a char*/

  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }

  // we then simply join the string
  return uniString.join("");
}

// test here
console.log(binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
));


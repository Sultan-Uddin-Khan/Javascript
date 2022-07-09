//Problem 18
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result)

//Problem 19
let quoteSample1 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result1 = quoteSample.match(nonAlphabetRegex).length;
console.log(result1)

//Problem 20
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result2 = movieName.match(numRegex).length;
console.log(result2)

//Problem 21
let movieName1 = "Catch 22";
let noNumRegex = /\D/g; // Change this line
let result3 = movieName1.match(noNumRegex).length;
console.log(result3)

//Problem 22 (Solution 1)
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result4 = userCheck.test(username);
console.log(result4)
//Code Explanation
// ^ - start of input
// [a-z] - first character is a letter
// [a-z]+ - following characters are letters
// \d*$ - input ends with 0 or more digits
// | - or
// ^[a-z] - first character is a letter
// \d\d+ - following characters are 2 or more digits
// $ - end of input

//Problem 22 (Solution 2)
let username1 = "JackOfAllTrades";
const userCheck1 = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result5 = userCheck.test(username);
console.log(result5)
// Code Explanation
// ^ - start of input
// [a-z] - first character is a letter
// [0-9]{2,0} - ends with two or more numbers
// | - or
// [a-z]+ - has one or more letters next
// \d* - and ends with zero or more numbers
// $ - end of input
// i - ignore case of input

//Problem 23
let sample = "MindYourPersonalSpace";
let countWhiteSpace = /\s/g; // Change this line
let result6 = sample.match(countWhiteSpace);
console.log(result6)

//Problem 24
let sample1 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result7 = sample.match(countNonWhiteSpace);
console.log(result7)
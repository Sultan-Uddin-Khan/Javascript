//Problem 9
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
console.log(result);

//Problem 10
let quoteSample1 = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result1 = quoteSample1.match(myRegex); // Change this line
console.log(result1)

//Problem 11
let quoteSample2 = "3 blind mice.";
let myRegex1 = /[^aeiou0-9]/gi; // Change this line
let result2 = quoteSample.match(myRegex); // Change this line
console.log(result2)

//Problem 12
let difficultSpelling = "Mississippi";
let myRegex2 = /s+/g; // Change this line
let result3 = difficultSpelling.match(myRegex);
console.log(result3)

//Problem 13
let chewieQuote='Aaaaaaaaaaaaaaaarrrgh!';
let chewieRegex = /Aa*/; // Change this line
let result4 = chewieQuote.match(chewieRegex);
console.log(result4)

//Problem 14
let text = "<h1>Winter is coming</h1>";
let myRegex3 = /<h*?1>/; // Change this line
let result5 = text.match(myRegex);
console.log(result5);

//Problem 16
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result6 = calRegex.test(rickyAndCal);
console.log(result6)

//Problem 17
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result7 = lastRegex.test(caboose);
console.log(result7)
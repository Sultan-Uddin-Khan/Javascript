//Problem 1
let myString = "Hello, World!";
let myRegex = /Hello/;
let result= myRegex.test(myString); // Change this line
console.log(result)

//Problem 2
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result1 = waldoRegex.test(waldoIsHiding);
console.log(result1)

//Problem 3
let petString = "Emma has a pet rock.";
let petRegex = /dog|bird|cat|fish/; // Change this line
let result2 = petRegex.test(petString);
console.log(result2)

//Problem 4
let myString1 = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result3 = fccRegex.test(myString1);
console.log(result3)

//Problem 5
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result4 = extractStr.match(codingRegex); // Change this line
console.log(result4);

//Problem 6
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result5 = twinkleStar.match(starRegex); // Change this line
console.log(result5)

//Problem 7
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // Change this line
let result6 = unRegex.test(exampleStr);
console.log(result6);

//Problem 8
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result7 =quoteSample.match(vowelRegex); // Change this line
console.log(result7);
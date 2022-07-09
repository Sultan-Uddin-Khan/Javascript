//Problem 25
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);
console.log(result)

//Problem 26
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result1 = haRegex.test(haStr);
console.log(result1)

//Problem 27
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result2 = timRegex.test(timStr);
console.log(result2)

//Problem 28
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result3 = favRegex.test(favWord);
console.log(result3)

//Problem 29
let sampleWord = "astronaut";
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
let result4 = pwRegex.test(sampleWord);
console.log(result4)

//Problem 30
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin D.|Eleanor) Roosevelt/; // Change this line
let result5 = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works
console.log(result5)

//Problem 31
let repeatNum = "42 42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result6 = reRegex.test(repeatNum);
console.log(result6)

//Problem 32
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result8 = str.replace(fixRegex, replaceText);
console.log(result8)

//Problem 33 
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result7 = hello.replace(wsRegex, "");
console.log(result7)

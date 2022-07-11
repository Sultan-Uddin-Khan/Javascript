//Problem 1
function palindrome(string) {
  const variableLowerCase= string.toLowerCase();
  const variableNoSpace=variableLowerCase.replace(/\s+/g, '',); 
  const variableNoSpecialCharacter=variableNoSpace.replace(/[^\w\s]/gi, '');
    const variableNoUnderScore=variableNoSpecialCharacter.replace( /_/g, '')
    const variableReverseString=variableNoUnderScore.split("").reverse().join("")
    if(variableNoUnderScore===variableReverseString){
     return true;
    }
     return false;
   }
   
   console.log(palindrome("0_0 (: /-\ :) 0-0"));

  //Problem 2

function convertToRoman(number) {
    let objectAssume = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let romanNumber = '';
    for (let value in objectAssume ) {
        console.log(value)
        console.log(objectAssume[value])
      while ( number >= objectAssume[value] ) {
        romanNumber += value;
        console.log(romanNumber)
        number -= objectAssume[value];
        console.log(number)
      }
    }
    return romanNumber;
  }

console.log(convertToRoman(36));

//Problem 3

const rot13 = string => {
  let decodedCipher = ''
  // The number 65 represents A which also is the begining of our alphabets. 
  // The number 90 represents Z which also is the end of our alphabets.
  // Space and any other non-alpha character is less than 65(A) and greater than 90(Z).
  
  // Split and loop over every character
  string.split('').forEach(character => {
    // Get the integer or unicode for every character which returns a number and store it in letterChar
    const letterCharacter = character.charCodeAt()
    
    // Check if number(letterChar) is less than 65(A) or greater than 90(Z)
    // If true, return the number(letterChar) which means, it could be a non-alpha character
    // If false, return the number(letterChar) + 13, which means it has shifted 13 places.
    let unicode = letterCharacter < 65 || letterCharacter > 90 ? letterCharacter : letterCharacter + 13

    // unicode minus 1 is greater or equal to 90(Z)
    // Set unicode to equal unicode minus 1, 
    // we minus 1 cause unicode will give us the right operand instead of the left operand
    // eg N + 13 will give us B instead of A, so,
    // We substract the now(unicode-1) unicode from 90 to get the number left, then we add it to 65(A),
    // Cause we start from begining after we've met the end
    if((unicode - 1) >= 90) unicode = (((unicode - 1) - 90) + 65)

    // Convert and add every character to cipher
    decodedCipher += String.fromCharCode(unicode)
  })

  return decodedCipher;
}

console.log(rot13("SERR CVMMN!"));

//Problem 4

function telephoneCheck(str) {
  return /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/.test(str);;
 }
 
 console.log(telephoneCheck("555-555-5555"));

 //Problem 5
 let currencyList  = [
	{ name: 'ONE HUNDRED', value: 100},
	{ name: 'TWENTY', value: 20},
	{ name: 'TEN', value: 10},
	{ name: 'FIVE', value: 5},
	{ name: 'ONE', value: 1},
	{ name: 'QUARTER', value: 0.25},
	{ name: 'DIME', value: 0.1},
	{ name: 'NICKEL', value: 0.05},
	{ name: 'PENNY', value: 0.01}
];

function checkCashRegister(price, cash, cid) {
 let objectReturn = {status: null, change: []};
 let changeAmount = cash - price;
 let sumAmountInDrawer = cid.reduce(function(accumulator, currentValue) {
 accumulator.sum += currentValue[1];
 accumulator[currentValue[0]] = currentValue[1];
 return accumulator;
 }, {sum: 0});
 if(sumAmountInDrawer.sum === changeAmount) {
 objectReturn.status = 'CLOSED';
 objectReturn.change = cid;
 return objectReturn;
 }
 if(sumAmountInDrawer.sum < changeAmount) {
 objectReturn.status = 'INSUFFICIENT_FUNDS';
 return objectReturn;
 }
 let changeAmountArray = currencyList.reduce(function(accumulator, currentValue) {
 let value = 0;
 while(sumAmountInDrawer[currentValue.name] > 0 && changeAmount >= currentValue.value) {
 changeAmount -= currentValue.value;
 sumAmountInDrawer[currentValue.name] -= currentValue.value;
 value += currentValue.value;
 changeAmount = Math.round(changeAmount * 100) / 100;
 }
 if(value > 0) {
 accumulator.push([ currentValue.name, value ]);
 }
 return accumulator;
 }, []);
 if(changeAmountArray.length < 1 || changeAmount > 0) {
 objectReturn.status = 'INSUFFICIENT_FUNDS';
 return objectReturn;
 }
 objectReturn.status = 'OPEN';
 objectReturn.change = changeAmountArray;
 return objectReturn;
}
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05],
 ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
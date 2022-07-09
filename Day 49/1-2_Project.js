//Problem 1
function palindrome(str) {
   const varLowercase= str.toLowerCase();
   console.log(varLowercase)
   const varNoSpace=varLowercase.replace(/\s+/g, '',); 
   console.log(varNoSpace)
   const varNoSpecialCharacter=varNoSpace.replace(/[^\w\s]/gi, '');
   console.log(varNoSpecialCharacter)
   const varNoUnderscore=varNoSpecialCharacter.replace( /_/g, '')
   console.log(varNoUnderscore)
   const varReverseStr=varNoUnderscore.split("").reverse().join("")
   console.log(varReverseStr)


   if(varNoUnderscore===varReverseStr){
    return true;
   }
    return false;
  }
  
  console.log(palindrome("0_0 (: /-\ :) 0-0"));

  //Problem 2

function convertToRoman(num) {
    let obj = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let roman = '';
    for (value in obj ) {
        console.log(value)
        console.log(obj[value])
      while ( num >= obj[value] ) {
        roman += value;
        console.log(roman)
        num -= obj[value];
        console.log(num)
      }
    }
    return roman;
  }

console.log(convertToRoman(36));
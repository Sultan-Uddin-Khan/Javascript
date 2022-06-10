<<<<<<< HEAD
function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
    console.log (maxLength);
  }
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  
=======
console.log('connected?')
>>>>>>> 70bd001f24ecc0162cef434d9bd275db70358930

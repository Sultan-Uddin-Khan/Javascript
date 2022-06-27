//Problem 6
function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}

console.log(translatePigLatin("consonant"));

//Problem 7
function myReplace(str, before, after) {
  before[0].match(/^[A-Z]*$/)
  ?after = after[0].toUpperCase()+after.slice(1)
  :after = after[0].toLowerCase()+after.slice(1)

   return str.search(before)>0
    ?str.replace(before,after)
    : str;
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

//Problem 8
function pairElement(str) {
  let newArr=[];
  let modStr=str.split("")
  for(let i=0;i<modStr.length;i++){
    if(modStr[i]==='G'){newArr.push(["G","C"])}
    if(modStr[i]==='C'){newArr.push(["C","G"])}
    if(modStr[i]==='A'){newArr.push(["A","T"])}
    if(modStr[i]==='T'){newArr.push(["T","A"])}
  }
  return newArr;
}

console.log(pairElement("ATCGA"));

//Problem 9
function fearNotLetter(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

console.log(fearNotLetter("abce"));

//Problem 10
function uniteUnique(...arr) {
  return [...new Set(arr.flat())];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

//Problem 11
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

// test here
console.log(convertHTML("Dolce & Gabbana"));
//String operation
let message= 'We are learning about string'
console.log(message.charAt(0))
console.log(message.charCodeAt(3))
console.log(message.toLowerCase())
console.log(message.toUpperCase())
console.log(message.includes('We',5))//find whether the given string is included in our string or not
console.log(message.startsWith('We'))//find the strins starts with given word
console.log(message.endsWith('string'))//find if the string ends with given string
console.log(message.search('are'))//return the index number of 1st occurrence
console.log(message.indexOf('about',14))
console.log(message.lastIndexOf('about',14))
let number=false
console.log(typeof(number.toString()))
console.log(typeof(number))
console.log(message.split(" ",3))
console.log(message.slice(0,5))
console.log(message.slice())
console.log(message.slice(3))
console.log(message.slice(-5,-1))
console.log(message.substring(0,6))
console.log(message.substr(0,8))

//Leetcode Problem Solving

var isMatch = function(s, p) {
    p.toLowerCase();
    s.toLowerCase();
    if((p.includes('.') || p.includes("*"))&& 1<=s.length<=20 && 1<=p.length<=30){
        return true
    }
    return false
};
console.log(isMatch("a","a"))
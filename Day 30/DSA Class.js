//Part 1
// # Problem Solving approach
 
// ### 1. understanding the problem
 
// - restate the problem in own words
// - what are the input and outputs
// - Is there enough information to solve the problem
// - Thinking of labelling data (don't use random label like i, j, k, a, b)
// - checking the example with invalid, empty input
 
// ---
 
// > Write the problem that takes 2 numbers and returns the sum?
 
// ---
 
// ```javascript
// //writing a function that takes /two number and returns the sum
// function sum(num1, num2) {
//   //output
// }
// sum(10, 15)
// ```
 
// ### 2.Note own the details like input, output
 
// ### 3. Start with the naive/brute force approach. First thing that comes into mind. It shows that you’re able to think well and critically (you don't need to write this code, just speak about it).
 
// ### 4. Tell them why this approach is not the best (i.e. O(n^2) or higher, not readable, etc...)
 
// ### 5. Walk through your approach, comment things and see where you may be able to break things.
 
// ### 6. Before you start coding, walk through your code and write down the steps you are going to follow
 
// ### 7. breakdown the steps and commenting is the ultimate key,Rundown of thinking process, steps. Breaking down the code will you give you the extra advantage
 
// ### 8.start coding (simplify as necessary)
 
// ### 9. can you write it better in terms of readability, time, space complexity?
 
// ### 10. If your interviewer is happy with the solution, the interview usually ends here. It is also Common that the interviewer asks you extension questions
 
// > Write a function which takes in a string and returns counts of each character in the string.
 
// ```javascript
// //writing a function that takes /two number and returns the sum
// function countCharacter(inputStr) {
//   //output
// }
// countCharacter('Hello')
// ```
 
// > checking the element exists between two array
 
// function countCharacter(inputStr){
// //output
// }
// countCharacter("Hello")
 
// ```javascript
// function isElementExists(arr1, arr2) {
//   //output
// }
// isElementExists(['a', 'b', 'c'], [1, 2, 3, 'z'])
// ```





//Part 2
//Array object Complexity
const arr = ['a', 'b', 'c']
// console.log(arr.length)
 
//access by index O(1)
// console.log(arr[arr.length - 1])
 
//adding item/element at the end of the array O(1)
// arr[arr.length] = 'd'
// arr.push('d')
 
// //removing element from end of the array time complexity O(1)
// arr.pop()
 
//at the beginning of array adding element O(n)
// arr.unshift('z')
//at the beginning of array removing element O(n)
// arr.shift('z')
 
//finding element from an array O(n)
// for(let elm of arr){
//     if(elm === 'c') console.log(true)
// }
 
//forEach, map, filter, reduce, slice, splice O(n)
// console.log(arr)
 
//Object
 
const obj = {
  name: 'samim',
  email: 'samimfazlu@gmail.com',
}
 
//accessing element O(1)
console.log(obj.name)
//adding/inserting element O(1)
obj.profession = 'programmer'
 
//delete/removal element O(1)
delete obj.profession
console.log(obj)
 
//searching O(1)
console.log('email' in obj)
 
//searching O(n)
// for(let key in obj){
//     console.log(obj[key])
//     console.log(key)
// }
 
//Object.keys() O(n)
// console.log(Object.keys(obj))
// //Objet.values() O(n)
// console.log(Object.values(obj))
 
// //Object.entries() O(n)
// console.log(Object.entries(obj))
 
// console.log(obj.name)
// console.log(obj["name"])
// console.log(obj['1email']) //invalid key must be accessed by []
 
//when to use array
//when order is important
// when you need faster access (by index) or
//adding or removal(at the end)
 
//when to use object
//when order isn't important
// when you need faster access or removal






//Part-3
//sum 2 numbers and return the result
//addition of two numbers
//input - 10, 15 //output - 25
//input 20, 30  //output 50
//input 20.33, 40.5345 //output - 60
 
// function sum(num1, num2) {
//   //output
//   return num1 + num2
// }
// sum(10, 20)
 
//count the character
//input - string 'Hello' output- {h: 1, e: 1, l: 2, o: 1}
//input - string 'greet' output- {g: 1, r: 1, e: 2, t: 1}
 
//time complexity O(n)
//space complexity O(n)
// function countCharacter(str) {
//creating an object for tracking the frequency of element
//   const hashMap = {}
 
// looping the input anf generalize the case
//   const normalizeStr = str.toLowerCase()
//   for (let i = 0; i < normalizeStr.length; i++) {
// if there is any space ignore it
// const char = normalizeStr[i]
// if (char === ' ') continue
//ternary
// char in hashMap ?  hashMap[char] = hashMap[char] + 1 : hashMap[char] = 1
// hashMap[char] = (hashMap[char] || 0) + 1
// if (char in hashMap) {
//   //check if the element exists on the object increment the existent count value
//   hashMap[char] = hashMap[char] + 1
// } else {
//   // if element not present assign the value 1
//   hashMap[char] = 1
// }
//   }
//   return hashMap
// }
// console.log(countCharacter('He llo'))
 
//check the element of first array 2nd array
//if the element exists
//return true
//otherwise false
 
// input- arr1-['a', 'b', 'c'] arr2-[1, 2, 3, 'z'] //false
// input- arr1-['a', 'b', 'c'] arr2-[1, 2, 3, 'c'] //true
//time complexity O(n * m)
//space complexity O(1)
// function isElementExists(arr1, arr2) {
//     //flag variable
//     let exists = false
//     for(let elm of arr1){
//        if(arr2.includes(elm)){
//         exists = true
//         break
//        }
//     }
 
//     return exists
//   }
 
// time complexity O(n + m)
//space complexity O(n)
function isElementExists(arr1, arr2) {
    const frequencyCounter = {}
    for (let elm of arr1) {
      frequencyCounter[elm] = true
    }
   
    for (let elm of arr2) {
      if (elm in frequencyCounter) {
        return true
      }
    }
  }
   
  console.log(isElementExists(['a', 'b', 'c'], [1, 2, 3, 'b']))
//function statement
// function greet(){
//     console.log('Hi')
// };
// greet();

//function expression
// greet1();
// const greet1=()=>{
//     console.log('Hi');
// };

//Hoisting
// var firstName='Sultan Uddin';
// var lastName='Khan';
// console.log(firstName)
// console.log(lastName)
// function greets(){
//     console.log('Hi');
// }
// greets();
// console.log(greetE())
// var greetE=()=>{
//     console.log('Hi')
// };
// greetE();


// //Functional Scope
// let firstName='Sultan'
// function logger(){
//     firstName='Uddin'
//     return function loggerInner(){
//         //const firstName='Khan';
//         console.log(firstName);
//         //const lastName='Sadli'
//     }
//     console.log(firstName);
// }
// logger()();


//let vs var vs const

// {
//     let firstName='Sultan'
// }
// console.log(firstName)

// for(var i=0;i<10;i++){
//     console.log(i)
// }
// console.log(i)


//Difference between rest and spread operator
//  function product(name,...property){
//      console.log(name)
//      console.log(property)
//      return `${name}-${property[0]}`
//  }
//  const shirt=product('Printed T-Shirt', 30, 0 ,true, 'T-shirt category');


//  const profile=['sultan','khan',34,'Electrical Engineer']
//  const copyProfile=[...profile]
//  console.log(copyProfile)

// const product={
//     name:'T Shirt',
//     price:10,
//     showInfo(){
//         console.log(this)
//         return `${this.name} ${this.price}`
//     }
// } 
// function productOut(name){
// console.log(product);
// }
// productOut({...product})


//count the truthy value
const array=[0,null,undefined,'',2,3] 
function countTruthy(){
    let filterArray = array.filter(Boolean);
    console.log(filterArray);
}
countTruthy(array);

//add those value
const myArray=[1,2,3,4]
const copyMyArray=[...myArray];
console.log(copyMyArray)
function sum(myArray){
    let summation=0;
        for(let i=0;i<copyMyArray.length;i++){
            summation+=copyMyArray[i];    
        }
console.log(summation);}
sum(myArray);

// //Destructuring Starts
// //Access properties from object
// const person={
//     firstName:'Sultan Uddin',
//     lastName:'Khan',
//     age:30,
//     fullName(){
//         return this.firstName+'-'+this.lastName+'-'+this.age
//     },
// }
// const {firstName,lastName,age:myAge,fullName}=person
// console.log(firstName)
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.age)
// console.log(fullName.call(person))
// console.log(myAge)

// //Access properties from object
// //for getting access,exact order is important for array.
// const array=['Sultan Uddin','Khan',30]
// const [fName,lName,aGe]=array
// console.log(array[0])
// console.log(fName,lName,aGe)

// const array1=['Sultan Uddin','Khan',30]
// const [fName1,,aGe1]=array1
// console.log(array1[0])
// console.log(fName1,aGe1)
// //Destructuring End


// //rest operator
// const person1={
//     firstName1:'Sultan Uddin',
//     lastName1:'Khan',
//     age1:30,
//     fullName1(){
//         return this.firstName+'-'+this.lastName+'-'+this.age
//     },
// }
// const {firstName1,fullName1,...restValues}=person1
// console.log(restValues)

// const array2=['Sultan Uddin','Khan',30]
// const [fName2,...restValues1]=array2
// console.log(restValues1)

// //spread operator
// const personWithProfession={
//     ...person1,
//     profession:'Electrical Engineer'
// }
// console.log(personWithProfession)

// const array3=[...array2,'Electrical Engineer']
// console.log(array3)


// const person2={
//     fName:'Sultan Uddin',
//     lName:'Khan',
//     age:30,
// }
// function printPerson({fName,age,lName}){
//     console.log(fName,lName,age)
// }
// printPerson(person2)


// const person3={
//     fName:'Sultan Uddin',
//     lName:'Khan',
//     age:30,
// }
// function printPerson(...restValues2){
//     console.log(restValues2)
// }
// printPerson(person3)

// //Default Value
// function printPerson2(fName2,lName2,age2=30){
//     console.log(fName2,lName2,age2)
// }
// printPerson2('Sultan','Khan')


// //scope
// //var(functional scope,global scope)
// //let,const(block scope,global scope)

// var a=10;

// function b(){
//     var c=20;
//     console.log(a)
//     console.log(c)
// }
// b();
// console.log(a)
// //console.log(c)

// const d=30;
// {
//     var e=50;
//     const blockVar=30;
//     console.log(blockVar);
//     console.log(d)
// }
// //console.log(blockVar);
// console.log(e);

// //scope chain
// const f=20;
// function showScope(){
//     //const f=30;
//     {
//      console.log(f);   
//      const g=40;
//      console.log(g);
//     }
//     console.log(f);
//     console.log(g);
// }
// showScope();

//closure scope
// function sum(num1){
//     return(num2)=>{
//         return num1+num2;
//     }
// }
// const innerFunc=sum(3);
// console.log(innerFunc(4));

//Hoisting
console.log(a)
//console.log(func())
console.log(hello())
var a=10;
var func=function(){
    console.log('Hi')
}
function hello(){
    console.log('hello')
}
//Preparation phase
//function declaration (statement in memory)
//variable declaration (memory)
//variable value is not set

//execution phase
//variable value assign
//calling
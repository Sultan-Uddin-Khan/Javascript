// const firstName= 'sultan'
// const age= 35
// const profession='Electrical Engineer'
// const isProgrammer= 'true'
// console.log('First Name '+firstName+ '.I am '+age+'.I am an '+ profession+ ' and it is '+isProgrammer);
// console.log (`First Name ${firstName}.I am ${age}.I am an ${profession} and it is ${isProgrammer}`)


// const info= ['Sultan', 34, 'Electrical Engineer'];
// const index =info.length-1
// console.log (info[index])
// console.log(`First Name ${info[0]}. I am ${info[1]}. I am an ${info[2]}`)


//  const identityOfPerson = {
//      firstName:'Sultan',
//      age:34,
//      profession: 'Electrical Engineer',
//      isprogrammer:true,
//      random1:[1,2,3,5],
//      random2:{
//          greet:'hello'
//      }
//  }
//  const myAge='age';
// console.log(identityOfPerson[myAge]);
// console.log `I am an ${identityOfPerson.profession}`
// console.log(identityOfPerson.random1[0])
// console.log(identityOfPerson.random2.greet)


// const identityOfPerson = {
//     firstName:'Sultan',
//     age:34,
//     profession: 'Electrical Engineer',
//     fullname: function(){
//         console.log(this.firstName)
//     },
//     isprogrammer:true,
//     random1:[1,2,3,5],
//     random2:{
//         greet:'hello'
//     }
// }
// //showBio(identityOfPerson)
// identityOfPerson.fullname()


// let x=20
// console.log(x>5 && x<30)
// console.log(x>5 || x<30)
// console.log(x>5 && x==30)
// console.log(x>5 && x!=30)
// console.log(x++)
// console.log(x++)
// console.log(x--)
// console.log(x--)
// console.log(++x)
// console.log(--x)
// console.log(x>5)
// console.log(x<5)
// console.log(x>=10)
// console.log(x<=5)
// console.log(x==5)
// console.log(x!=5)
// console.log(x==5)
// console.log(x=='10') 
// console.log(x==='10')


//Short Circuit Theory & Checking truthy and flasy value
// console.log(true && true && false && true)
// console.log(true || false || false || true)
// console.log(!'Hello')
// console.log(!!'Hello')
// console.log(!undefined)
// console.log(!!'')


// const str=''
// const msg='haha!'
// const isFunny="false"
// console.log(!((str || msg) && isFunny ))


// const isAdmin=true;
// const profileOwner= true;
// if(isAdmin===true && profileOwner===true){
//    console.log('Yes I am Admin and I am the Owner of the Profile')
// }
// else{
//  console.log('Something Went Wrong')
// }
// let isEveryThingRight= (isAdmin && profileOwner) ? console.log('Yes I am Admin and I am the Owner of the Profile'):
// ('Something Went Wrong') 
// console.log(isEveryThingRight)


// const price=30;
// if(price<=20){
//     console.log('No Shipping')
// } else if(price>20 && price <=40){
//     console.log('Free shipping available')
// }
// else{
//     console.log('Special discount applied')
// }


// let age=30;
// if(age<10){
//    console.log('stay home under your mom supervision')
// } else if(age>=10 && age<15){
//     console.log('Try to gain knowledge from outside of home')
// } else if (age>=15){
//     console.log('Prepare to cast vote')
// } else if(age>18){
//     console.log('Cast your vote')
// }else{
//     console.log('You are out of range')
// }

// const Age=20;
// switch(Age){
//     case 9: 
//     console.log('stay home under your mom supervision')
//    break;
//    case 12: 
//    console.log('Try to gain knowledge from outside of home')
//     break;
//     case 15: 
//     console.log('Prepare to cast vote')
//         break;
//        case 20:
//         console.log('Cast your vote')
//             break;
//         default:
//         console.log('You are out of range')
//     }


// const str='You are a hero'
// console.log(str.length);
// console.log(str[0]);
// for(let number=0; number<str.length;number++){
//         console.log(`${str} repeated in ${number} times`);
 
// }


// const profile=['Sultan Uddin','Khan',34, 'Electrical Engineer']
// let i=0;
// while(i<profile.length){
//     if(profile[i]===34){
//         console.log('I don\'t want to show my age')
//         i++;
//         continue;
        
//     }
//     else{
//     console.log(profile[i])
// }
//     i++
// }


// //Array Looping
// const userInfo=['Sultan Uddin','Khan',34, 'Electrical Engineer']
// for(let value of userInfo){
//     console.log(value)
// }


//Object Looping
// const profile={
//     firstName:'Sultan Uddin',
//     lastName:'Khan',
//     age:34,
//     profession:'Electrical Engineer'}

// for (let key in profile){
//     console.log(profile[key])
// }

// const ov = "$";
// for (let i=0;i<6;i++) {
//     console.log(ov.repeat(i+1));
// }


// for(let i=0;i<10;i++){
//     if(i===5){
//         continue;
//     }
//     console.log(i)
// }

// for(let i=0;i<10;i++){
//     if(i===5){
//         break;
//     }
//     console.log(i)
// }


 const obj={
     a:'Hello',
     b:'World'
}
 console.log(Object.keys(obj))
 const objLength= Object.keys(obj).length
for(let i=0;i<objLength;i++){
    const arrObj=Object.keys(obj)
     console.log(obj[arrObj[i]])
 } 

 const obj1={
     a:'Hello',
     b:'World'
 }
console.log(Object.values(obj1))
 const obj1Values= Object.values(obj1);
 const obj1ValuesLength= Object.values(obj1).length
 for(let i=0;i<obj1ValuesLength;i++){
     console.log(obj1Values[i])
 }


// function calculate(num1,num2,action)
// {
//     let result;
//     if(action==='sum'){
//       result=num1+num2;  
//     } else{
//      result=num1-num2;   
//     }
    
//     return result;
// }
// console.log(calculate(2,1,'sum'))
// console.log(calculate(2,1,'sub'))

// const numArr =[1,2,3]
// function sum(nums){
//     let totalNum=0;
//   for (let number of nums){
//       totalNum+=number;  
//   }
//   return totalNum;
// }
// console.log(sum(numArr))


// const movies=[
//     {id:1,
//      name:'Movie 1',
//      rating:4,
//      category:'action'    
//     },
//     {id:2,
//     name:'Movie 2',
//     rating:5,
//     category:'drama'}
// ]
// function showMovies(myMovies){
//     let movieInfo=''
//    for(let movie of myMovies){
//        movieInfo+=movie.name+' '
       
//    } 
//    return movieInfo;
// }
// console.log(showMovies(movies))



// const a=10;
// function passByValue(num){
//     let b= num
//     b=20
//     console.log(b)
// }
// passByValue(a)
// console.log(a)


// const aObj={
//     name:'Sultan'
// };
// function passByRef(myObj){
//     let bObj= myObj
//     console.log(bObj)
//     bObj.age=34;
//     console.log(bObj)
// }
// passByRef(aObj)
// console.log(aObj)


// const product={
//     name:'Print T-shirt',
//     price:10,
//     'is available':true
// }
// //Dynamically Access Properties
// const availability='is available'
// console.log(product.name)
// console.log(product['name'])
// console.log(product['is available'])
// console.log(product[availability])

// const product1={
//     name:'Print T-shirt',
//     price:10,
//     'is available':true,
//     productDesc(){
//     return`${this.name}-${this.price}`}
// }
// console.log(product1.productDesc());



// function product() {
//     return{
//      name:'Sneaker',
//      price:60,
//      'is available':true,
//      productDesc(){
//      return`${this.name}-${this.price}`
//  }
//     }
//        }
//  console.log(product())
//  console.log(product().name)
//  console.log(product().price)
//  console.log(product().productDesc())

//  //Factory Function
// function product1(name,price,availability) {
//     return{
//      name,
//      price,
//      availability,
//      productDesc(){
//      return`${this.name}-${this.price}`
//  }
//     }
//        }

//        console.log(product1('Printed T-Shirt',10,true))

// function sayHi(age,profession){
// console.log(this);
// return`Hi ${this} You are ${age}. You are an ${profession}`
// }
// const sayHiAfterBinding= sayHi.bind('Sultan')
// const output1=sayHiAfterBinding.call(undefined,34, 'Electrical Engineer')
// const output2=sayHiAfterBinding.apply(undefined,[34, 'Electrical Engineer'])
// console.log(output1)
// console.log(output2)


// function getRandomInt(min,max){
//         min=Math.ceil(min);
//          max=Math.floor(max);
//          return Math.floor(Math.random()*(max-min))+min;
        
//      }
//      console.log(getRandomInt(2,6))
//      console.log(getRandomInt(2,6))
//      console.log(getRandomInt(2,6))
//      console.log(getRandomInt(2,6))




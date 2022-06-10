//Copy by Value (primitive) and Copy by Reference(complex data type)
// let a=10;
// const b=a;
// console.log(a)
// console.log(b)
// a=20;
// console.log(a)
// console.log(b)

// let obj1={value:3};
// const obj2=obj1;
// console.log(obj1)
// console.log(obj2)
// obj1.value=5;
// console.log(obj1)
// console.log(obj2)


//pass by value 
// let a=10;
// function passByValue(a){
//    a=20
// }
// passByValue(a);
// console.log(a)
// //pass by reference
// let obj={value:10};
// function passByReference(obj){
//    obj.value=20
// }
// passByReference(obj);
// console.log(obj)


// const product1={
//     name:'T Shirt',
//     price:20,
//     availability:true
// };
// let product2={}
// for (let key in product1){
//     product2[key]=product1[key]
// }
// console.log(product2)


// const product1={
//        name:'T Shirt',
//        price:20,
//        availability:true
//      };
//      const product2=Object.assign({color:'red'},product1)
//      console.log(product2)


// const product1={
//        name:'T Shirt',
//        price:20,
//        availability:true
//       };
//      const product2={...product1, color:'red'}
//      console.log(product2)


//Math Objects
//ceil
//floor
//random
//absolute
//round

// console.log(Math.random())

// function getRandomInt(min,max){
//     min=Math.ceil(min);
//     max=Math.floor(max);
//     return Math.floor(Math.random()*(max-min))+min;
    
// }
// console.log(getRandomInt(2,6))
// console.log(getRandomInt(2,6))
// console.log(getRandomInt(2,6))
// console.log(getRandomInt(2,6))


// const now=new Date()
// let date=new Date(10000)
// date=new Date(2018,10,15,6,15,59)
// date.setFullYear(2019)
// date.setMonth(5)
// console.log(date)


// //Exercise 1
//   function max(a,b){
//        if(a>b){
//            return a
//        }else{
//            return b
//       }
//  }
// console.log(max(20,30));

//Exercise 2
// function showNumber(num){
//     for(let i=0;i<num;i++){
//         console.log (i);
//     }
// }
// showNumber(30)

//Exercise 3
//  function sum(num){
//  let sum = 0;
//  for (let i = 1; i < num; i++) {
//      sum += i;
//      console.log(sum)
//  }}

//  sum(20);


//Exercise 4
//  let arr = [60,70,90,50,55];
//  let sum=0;
//  function calculateAverage(arr){
//       for (let i = 0; i < arr.length; i++) {
//      sum+= arr[i];  
//  } console.log(sum);
//    let avg=sum/arr.length; 
//    console.log(avg);
//    if(avg<60){
//     console.log('F')
// } else if(60<avg<69){
//     console.log('D')
// }else if(70<avg<79){
//     console.log('C')
// }else if(80<avg<89){
//  console.log('B')
// }else if(avg>90){
//  console.log('A')
// }   
// }  
// calculateAverage(arr)

//Exercise 5
var movie={
    title:'a',
    releaseYear:2018,
    rating:4.5,
    director:'b'
};

var objValues=Object.values(movie)
console.log(objValues.length)
for (let i = 0; i < objValues.length; i++) {
  if (typeof objValues[i] == "string") {
    console.log(objValues[i]);
  }}

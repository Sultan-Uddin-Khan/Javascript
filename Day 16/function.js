// const greet= function(name){
//     return 'Hi'+name;
// };
// greet.lastName='Khan'
// console.log(greet(' Sultan'));
// console.log(greet.lastName);


// function product(name, price, discount, availability){
//         return `${name}-${price}`
// }
// const shirt=product('Printed T-Shirt', 30, 0 ,true);
// console.log(shirt)

// function product(){
//     let info=''
//     for(const property of arguments){
//      info+=property + " ";   
//     }
//     return info;
// }
// const shirt=product('Printed T-Shirt', 30, 0 ,true);
// console.log(shirt)

// function product(name,...property){
//     console.log(name)
//     console.log(property)
//     return `${name}-${property[0]}`
// }
// const shirt=product('Printed T-Shirt', 30, 0 ,true, 'T-shirt category');
// console.log(shirt)


//  function product(name, price, discount, shipping, category='T Shirt'){
//      discount=discount||0.1;
//     console.log(name, price, discount, shipping, category);
//  }
//  const shirt=product('Printed T-Shirt', 30, undefined ,true);
//  console.log(shirt)

// const add= (num1,num2)=>{
//     return num1+num2
// }
// const result =add(3,2)
// console.log(result)


//   const add= num=>
//      num*num
//      const result =add(3)
//      console.log(result)


// const product={
//     name:'T Shirt',
//     price:'$30',
//     showInfo(){
//         return `${this.name}-${this.price}`;
//     }}
//     const info= product.showInfo();
//     console.log(info);


// const product= ['T Shirt',10, 0, true];
// const [name,price,...others]=product;
// console.log(name,price,others);


// const product={
//     name:'T Shirt',
//     price:'$30',
//     showInfo(){
//         return `${this.name}-${this.price}`;
//     }}
//  function productOut ({name,price,showInfo}){
//         console.log(name,price)
//  }
//  productOut(product);

// const greet=()=>{
//     return function(){
//         return 'Hi'
//     }
// }
// console.log(greet()())

const greet=(fn)=>{
    console.log(fn())
    }

greet(function(){
    return 'Hi';
})
   


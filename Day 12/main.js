//Object key:value property:value
/*const product={
    name:'Print T-shirt',
    price:10,
    'is available':true
}
//Dynamically Access Properties
const availability='is available'
console.log(product.name)
console.log(product['name'])
console.log(product['is available'])
console.log(product[availability])

const product={
    name:'Print T-shirt',
    price:10,
    'is available':true,
    productDesc(){
    return`${this.name}-${this.price}`}
}
console.log(product.productDesc());


const product1={
    name:'Print T-shirt',
    price:10,
    'is available':true,
    productDesc(){
    return`${this.name}-${this.price}`}
};
const product2={
    name:'Sneaker',
    price:60,
    'is available':true,
    productDesc(){
    return`${this.name}-${this.price}`}
}
console.log(product1.name);
console.log(product1.price);
console.log(product1.productDesc());
console.log(product2.name);
console.log(product2.price);
console.log(product2.productDesc());


function product() {
   return{
    name:'Sneaker',
    price:60,
    'is available':true,
    productDesc(){
    return`${this.name}-${this.price}`
}
   }
      }
console.log(product())
console.log(product().name)
console.log(product().price)
console.log(product().productDesc())

//Factory Function
function product(name,price,availability) {
    return{
     name,
     price,
     availability,
     productDesc(){
     return`${this.name}-${this.price}`
 }
    }
       }

       console.log(product('Printed T-Shirt',10,true))



//Constructor Function
function Product(name,price){
      this.name=name;
      this.price=price;
      this.productDesc= function(){
        return`${this.name}-${this.price}`   
      }
      console.log(this)
}
const product1=new Product('Sneaker',60)
console.log(product1)
console.log(product1.name)
console.log(product1.price)
console.log(product1.productDesc())


//this inside method=object (One rule)
//this in a constructor function =calling the variable which is created due to constructor function
//otherwise indicate window


function sayHi(age,profession){
    console.log(this);
    return`Hi ${this} You are ${age}. You are an ${profession}`
}
const sayHiAfterBinding= sayHi.bind('Sultan')
const output1=sayHiAfterBinding.call(undefined,34, 'Electrical Engineer')
const output2=sayHiAfterBinding.apply(undefined,[34, 'Electrical Engineer'])
console.log(output1)
console.log(output2)

const sayHi=function (age,profession){
    console.log(this);
    return`Hi ${this} You are ${age}. You are an ${profession}`}.bind('Sultan');
  
    const output1=sayHi.call(undefined,34, 'Electrical Engineer')
    const output2=sayHi.apply(undefined,[34, 'Electrical Engineer'])
    console.log(output1)
    console.log(output2)*/
//array introduction
const arr=[1,3,5,7,8]
console.log(arr)
console.log(arr[0])
for (let num of arr){
    console.log(num)
}

const numbers=[1,3,5,7,8]

//Adding a number at last
numbers.push(12);
console.log(numbers)

//Adding a number in the beginning
numbers.unshift(-3);
console.log(numbers)

//Removing a number by selecting index at first and then counting number
numbers.splice(2,2)
console.log(numbers)

//removing a number positioned at last 
numbers.pop()
console.log(numbers)

//removing a number in the beginning
numbers.shift()
console.log(numbers)

//finding existence of any number in the array
const includedOrNot=numbers.indexOf('7')
console.log(includedOrNot);
const result=(includedOrNot==='7')?'included':'Not included';
console.log(result)
const result1=numbers.includes(8)
console.log(result1)

//finding element preferences
const products=[
    {id:1,
    name:'T-shirt',
    price:10
    },
   {id:2,
    name:'Shoes',
    price:20
   },
   {id:3,
    name:'T-shirt',
    price:10
    },
];
//return single item
const result2=products.find(function(productInfo){
    return productInfo.name==='T-shirt'
})
console.log(result2)
//return multiple item from object
const result3=products.filter(productInfo=>productInfo.name==='T-shirt')
console.log(result3)

//Combining Array
const num1=[2,3,4,5]
const num2=[6,7,8,9]
const result4=num1.concat(num2)
console.log(result4)
const combined=[num1,num2]
console.log(combined)
const combined1=[...num1,...num2]
console.log(combined1)
const combined2=num1.join('')
console.log(combined2)
const str='I am Sultan'
const combined3=str.split(' ');
console.log(combined3)
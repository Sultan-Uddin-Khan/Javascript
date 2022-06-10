//Split and Join
const num1=[2,3,4,5]
const num2=[6,7,8,9]
const result=num1.join()
console.log(result)
const str='I am Sultan'
const result1=str.split(' ')
console.log(result1)

//Copying Array
const numbers=[1,2,3,4,5]
const copiedArray=[...numbers]
console.log(copiedArray)
const copiedArray1=numbers;
numbers.push(6)
console.log(copiedArray1)
const copiedArray2=numbers.slice(0)
console.log(copiedArray2)
const copiedArray3=numbers.splice(0)
console.log(copiedArray3)

//Emptying Array
let number= [1,2,3,4,5]
const anotherNumber=number;
number=[]
console.log(number)
console.log(anotherNumber)


//Iterating Array
let number2= [1,2,3,4,5]
number2.forEach(function(num,index,arr){
    console.log(num);
    console.log(index);
    console.log(arr)
})
for (let [index,number] of Object.entries(number2)){
    console.log(index,number)
}

//sorting array
const products=[
    {id:1,
    name:'T-shirt',
    price:10
    },
   {id:3,
    name:'Shoes',
    price:20
   },
   {id:2,
    name:'shoes',
    price:10
    },
];
const sortedResult=products.sort(function(a,b){
    //solution 1
    //return(a.id>b.id)?1:-1||0;
    //solution 2
    //if(a.id>b.id) return 1
    //if(a.id<b.id) return -1
    const valueA=a.name.toLowerCase();
    const valueB=b.name.toLowerCase();
    if(valueA>valueB) return 1
    if(valueA<valueB) return -1
    return 0;
})
console.log(sortedResult)

//Reducing Array
const num=[1,4,6,10]
const sum1=num.reduce((accumulator,current)=>{
    return accumulator+current
}
)
console.log(sum1)

//Every and sum method
//return true or false
let number3=[1,3,5,7]
const result3=number3.every((number)=>{
    return number>=1
});
console.log(result3)

const result4=number3.some((number)=>{
    return number<1
})
console.log(result4)

//Map method and chaining
let number4=[1,7,3,9]
const result5=number4
.map(number=>number*2)
.reduce((a,b)=>a+b)
console.log(result5)

//Exercise-1
//must result a array including all elements in the defined range
//results will be [1,2, 3, 4, 5, 6, 7, 8, 9, 10]
const number5 = arrayFromRange(1, 10);
console.log(number5);
function arrayFromRange(min, max) {     
    var len = max - min + 1;
	var a = new Array(len);
	for (let i = 0; i < len; i++){
    a[i] = min + i;	
}
console.log(a);}

//Exercise-2
//custom includes methods that is defined by you
//result true or false based on searchElement
const number6 = [1, 2, 3, 4]; 

function includes(array, searchElement) {
    const result8=number6.includes(searchElement)
    console.log(result8)
}
includes(number6, -1);

//Exercise-3
//Exclude the numbers you passed to the function  from numbers array
//result will be [3, 4]
let number7 = [1, 2, 3, 4];
function except(array, excluded) {
    number7 = number7.filter(val => !excluded.includes(val));  
    return number7
}
const output=except(number7, [1, 2]);
console.log(output); 

//Exercise-4
//count the occurrence of numbers 
//result will be number of occurrence .Example case: result will be 2  
//At first use procedural way
//Then use reduce method

const number8 = [1, 2, 3, 1]; 

function countOccurrences(array, searchElement) {
    let count = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] == searchElement) 
        count++
    }
    return count;
}
const count = countOccurrences(number8, 1); 
console.log(count);

const number9 = [1, 2, 3, 1]; 
const countOccurrences1 = (arr, val) =>arr.reduce((a, v) => (v === val ? a + 1 : a));
const count1 = countOccurrences1(number9, 1); 
console.log(count1);


//Exercise-5
//Get the maximum number from the array
//At first use procedural way
//THen use reduce method
const number10 = [1, 2, 3, 4]; 
const max = getMax([number10]);
console.log(max); 
function getMax(array) { 
    console.log(Math.max(...number10))
}

const number11 = [1, 2, 3, 4]; 
const max1 = number11.reduce(function(a, b) {
    return Math.max(a, b);
});
console.log(max1); 
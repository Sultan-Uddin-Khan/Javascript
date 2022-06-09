/*for(let i=0;i<10;i++){
    if(i===5){
        continue;
    }
    console.log(i)
}

for(let i=0;i<10;i++){
    if(i===5){
        break;
    }
    console.log(i)
}

const arr=[1,2,3];

for(i=0;i<arr.length;i++){
    console.log(arr[i]) 
}

const arr=[1,2,3];
for(let number of arr){
    console.log(number)
}

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

const obj={
    a:'Hello',
    b:'World'
}

const objValues= Object.values(obj);
const objValuesLength= Object.values(obj).length
for(let i=0;i<objValuesLength;i++){
    console.log(objValues[i])
}

for(let property in obj){
    console.log(obj[property]);
    console.log(property);
    
}

function calculate(num1,num2,action)
{
    let result;
    if(action==='sum'){
      result=num1+num2;  
    } else{
     result=num1-num2;   
    }
    
    return result;
}
console.log(calculate(2,1,'sum'))
console.log(calculate(2,1,'sub'))

const numArray= [1,2,3]
function sum(nums){
   return nums[0]+ nums[1]+nums[2]
}
console.log(sum(numArray))

const numArr =[1,2,3]
function sum(nums){
    let totalNum=0;
  for (let number of nums){
      totalNum+=number;  
  }
  return totalNum;
}
console.log(sum(numArr))

const movies=[
    {id:1,
     name:'Movie 1',
     rating:4,
     category:'action'    
    },
    {id:1,
    name:'Movie 2',
    rating:5,
    category:'drama'}
]
function showMovies(myMovies){
    let movieInfo=''
   for(let movie of myMovies){
       movieInfo+=movie.name+' '
       
   } 
   return movieInfo;
}
console.log(showMovies(movies))


const a=10;
const b=10;
console.log(a===b)

const aObj={
    name:'hi'
}
const bObj={
    name:'hi'
}
console.log(aObj===bObj)

const a=10;
function passByValue(num){
    let b= num
    b=20
    console.log(b)
}
passByValue(a)
console.log(a)


const aObj={
    name:'Sultan'
};
function passByRef(myObj){
    let bObj= myObj
    console.log(bObj)
    bObj.age=34;
    console.log(bObj)
}
passByRef(aObj)
console.log(aObj)*/


/*function sum(a,b){
    return a+b
}

const sum=(a,b)=>{
    return a+b
}
console.log(sum(1,2))

const sum=b=>b+b
console.log(sum(2))*/


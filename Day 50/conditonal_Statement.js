//Fizz Buzz Problem With Ternary Operator
const number=14;

console.log ((number%3===0 && number%5===0)
            ?'Fizz Buzz'
            :(number%3===0)
            ?'Fizz'
            :(number%5===0)
            ?'Buzz'
            :'Nothing')

//Leap year or not
const year=100;

console.log((year%400===0)
             ?'This Year is a Leap Year'
             :(year%4===0 && year%100!==0)
             ?'This year is Leap Year based on Second Condition'
             :'This year is not a leap Year')

//Grading System
const marks=32;

console.log((marks>=80 && marks<=100)
             ?'Your Grade is A+'
             :(marks>=70 && marks<=79)
             ?'Your Grade is A'
             :(marks>=60 && marks<=69)
             ?'Your Grade is A-'
             :(marks>=50 && marks<=59)
             ?'Your Grade is B'
             :(marks>=40 && marks<=49)
             ?'Your Grade is C'
             :(marks>=33 && marks<=39)
             ?'Your Grade is D'
             :'Your Grade is F'
)            

//Switch Statement for Multiple logical operator
const numbers=-10;

switch(true){
    case numbers>0:
    console.log('The Number is Positive');
    break;

    case numbers===0:
    console.log('The Number is Zero');
    break;

    case numbers<0:
    console.log('The Number is Negative');
    break;
}

//Assignments
//Number of Days in a given month of a given year
const month='February'
const years=2008;

if(month==='January'||month==='March'||month==='May'||month==='July'|| month==='August'||month==='October'||month==='December')
{
 console.log("The Number of Days is 31")
}
else if(month==='February' && (years%400===0 || (years%4===0 && years%100!==0)))
{
     console.log('The Number of Days is 29')
}
else if(month==='February' && (years%400!==0 || years%4!==0 && years%100!==0))
{
    console.log('The Number of Days is 28')
}
else
{
    console.log('The Number of Days is 30')
}

//Do While Loop

let num=100;

do{
  console.log('Hello World')
  num++;
}while(num<=5);

console.log(num);
/*var count=1;
while(count<=6){
    console.log(`Count is ${count}`);
    count++;
}

const text='I won\'t repeat my code'
let number=1;
while(number<6){
    console.log(`${text} repeated in ${number} times`);
    number++
}

/*const text='I won\'t repeat my code'
let number=1;
for(number=1; number<6;number++){
    console.log(`${text} repeated in ${number} times`);
}

const str='You are a hero'
console.log(str[0])
console.log(str.length)

for(let number=0; number<str.length;number++){
    console.log(`${str} repeated in ${str[number]} times`);
}

const profile=['Sultan Uddin','Khan',34, 'Electrical Engineer']
let i=0;
while(i<profile.length){
    if(profile[i]===34){
        console.log('I don\'t want to show my age')
        i++;
        break;
        
    }
    else{
    console.log(profile[i])
}
    i++
}
//Array Looping
const profile=['Sultan Uddin','Khan',34, 'Electrical Engineer']
for(let value of profile){
    console.log(value)
}

//Object Looping
const profile={
    firstName:'Sultan Uddin',
    lastName:'Khan',
    age:34,
    profession:'Electrical Engineer'
}
const surName='firstName'
console.log(profile['firstName']) 
console.log(profile.firstName)
console.log(profile[surName])

for (let key in profile){
    console.log(profile[key])
}

//Exercise 1
let num=1;

while(num<=10){
    console.log(num);
    num += 2;
}
// The loop starts with number 1 which is below 10 ,and shows 1. Then, it increases the value by 2
// and checked whether the condition satisfied or not. Thus, the results come.

//Exercise 2
let num=1;
while(num<=20){
    if(num%4===0){
    console.log(num);
    }
    num++;
}
// The loop starts with number 1 which is below 20 but didn't satisfy (num%4==0). Then, it increases 
//the value by 1 and checked whether the condition satisfied or not. Thus, the results come

//Exercise 3
let num=100;
while(num < 150){
    console.log(num+1);
    num--;
}
//It would be an infinite loop because by using num--, we are not letting the num going up of 150.

//Exercise 4 using while
let num=1;
while(num<100){
    if(num%2===0){
    console.log(num);
    }
    num++;
}

//Exercise 4 using for loop
let num=0;
for(num=0;num<=100;num++){
    if(num%2===0){
        console.log(num);
        }
    console.log(num);
    num++;
}*/

//Exercise 5
const ov = "$";
for (let i=0;i<6;i++) {
    console.log(ov.repeat(i+1));
}

/*//Exercise 6
for (let number = 1; number <= 100; number++) {
    let message;
  
    if (number % 15 === 0) {
      message = 'FizzBuzz';
    } else if (number % 3 === 0) {
      message = 'Fizz';
    } else if (number % 5 === 0) {
      message = 'Buzz';
    } else {
      message = number;
    }
  
    console.log(message);
  }*/






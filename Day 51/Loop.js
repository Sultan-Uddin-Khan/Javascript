//Sum of numbers 1 to 100
let sum=0;
for (let i=1;i<=100;i++){
    console.log(sum+=i)
}

//Print the even number between 100-200
for (let num=100;num<=200;num+=2){
    console.log(num)
}

//Print the summation of odd number and summation of even number between 1-100
let sumOdd=0
let sumEven=0

for(let i=1;i<=100;i+=2){
   console.log(sumOdd+=i)
}
for(let i=2;i<=100;i+=2){
    console.log(sumEven+=i)
 }

 //Leap year between 1800-2000

for (year=1800;year<=2000;year++){
    if(year%400===0 ||(year%4===0 && year%100!==0)){
        console.log(year)
    }
}

//Multiplication table of a number

let num=15;
for (let i=1;i<=10;i++){
    console.log(num*i)
}

//Determine first and last digit of a number and sum of all digit
 let number='123456';
 let sumAllDigit=0;
 console.log(number[0])
 console.log(number[number.length-1])
for (let i=0;i<number.length;i++){
    console.log(sumAllDigit+=Number(number[i]))
}

//Draw pattern
for (let row = 1; row <= 5; row++) {
    let stars = '';
    for (let col = 1; col <= row; col++) {
      stars = stars + '*';
    }
    console.log(stars);
  }

  for (let row = 5; row >= 1; row--) {
    let patterns = '';
    let number=5;
    for (let col = 1; col <= row; col++) {
      patterns = patterns + number;
      number--;
    }
    console.log(patterns);
  } 





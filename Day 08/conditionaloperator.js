//Single Condition
/*const age=20;

if(age===18)
{
 console.log('Yes I am 18')
}
else
{
 console.log('Some stupid lie')
}*/

//Multiple Conditions
/*const isAdmin=false;
const profileOwner= false;
if(isAdmin===true && profileOwner===true){
   console.log('Yes I am Admin and I am the Owner of the Profile')
}
else{
 console.log('Something Went Wrong')
}

//Ternary Operator
const isEveryThingRight= (isAdmin && profileOwner) ? console.log('Yes I am Admin and I am the Owner of the Profile'):
('Something Went Wrong') 
console.log(isEveryThingRight)

//Logical AND/OR Operator
const isEveryThingRight=
isAdmin && 'Yes I am Admin and I am the Owner of the Profile'
if(!isEveryThingRight) {
    console.log('Something went wrong');
}

//If Else If
const price=21;
if(price<=10){
    console.log('No Shipping')
} else if(price>10 && price <=20){
    console.log('Free shipping available')
}
else{
    console.log('Special discount applied')
}

//Switch Statement
const product= 'blah'
switch(product){
    case'Blue Yeti':
    console.log('Better Microphone')
    break;
    case 'Snowball':
    console.log('Good Microphone')
    break;
    case 'Rode':
        console.log('OK')
        break;
        default:
            console.log('Unknown Microphone')
            break;
}

//Exercise with If
const age=30;
if(age<10){
   console.log('stay home under your mom supervision')
} else if(age>=10 && age<15){
    console.log('Try to gain knowledge from outside of home')
} else if (age>=15){
    console.log('Prepare to cast vote')
} else if(age>18){
    console.log('Cast your vote')
}else{
    console.log('You are out of range')
}

//Exercise with Switch 
const age=21;
switch(age){
    case 9: //age<10
    console.log('stay home under your mom supervision')
   break;
   case 12: //age>=10 && age<15
   console.log('Try to gain knowledge from outside of home')
    break;
    case 15: //age>=15
    console.log('Prepare to cast vote')
        break;
       case 20: // age>18
        console.log('Cast your vote')
            break;
        default:
        console.log('You are out of range')
    }*/

    //Exercise for finding big number among 3 nos given number
    const num1=35;
    const num2=34;
    const num3=37;
    if(num1>=num2){
        if(num1>=num3){
            console.log('The big number is:',num1)
        }
        else {
            console.log('The big number is:',num3)
        }
    } else if(num2>=num3){
        console.log('The big number is:',num2)
    } else{
        console.log('The big number is:',num3)
    }
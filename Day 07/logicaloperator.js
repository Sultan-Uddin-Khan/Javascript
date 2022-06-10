/*const x=10
console.log(x>5 && x<10)
console.log(x>5 || x<10)
console.log(x>5 && x==10)
console.log(x>5 && x!==10)*/

//Short Circuit Theory
console.log('Hello'&& 'World')
console.log('Hello'||'World')

console.log(true && true && false && true)
console.log(true || false || false || true)

//Checking truthy and flasy value
console.log(!'Hello')
console.log(!!'Hello')
console.log(!undefined)
console.log(!!'')
console.log(1+2*5)
console.log((1+2)*5)
console.log(1+(2*5))

console.log(true=='1')
console.log(0==false)
console.log(null==undefined)
console.log(NaN==NaN)

//Exercise 1
/*const x=10;
const y='a'
console.log(y==='b' || x>=10) */ /*The result comes true because || operator assumes a 
statement is true if one of the condition is true. Here x>=10 is true and y===b is not true.
|| statement always search for a true condition. If it finds it, it will never search for
remaining conditions*/

//Exercise 2
/*const x=3;
const y=8;
console.log (!(x=='3' || x ===y) && !(y !=8 && x<=y))*/ /* The results comes false here 
because (x=='3' || x ===y) will give true result as x==3 is true. (y !=8 && x<=y) will
give false result because as y!=8 is false and x<=y is true. So, finally, 
!true=false && !false=true. Here, final result is false because 1st condition is false. */ 

//Exercise 3
/*console.log(!'Hello World'); //'Hello World' is true so ! is false
console.log(!''); // '' is false so ! is true
console.log (!null); // null is false but !null is true
console.log(!0);  //0 is false and !0 ise true
console.log(!-1); //-1 is true !-1 is false
console.log(!NaN); */ //NaN is false. So, !NaN is true.

//Exercise 4
const str=''
const msg='haha!'
const isFunny="false"

console.log(!((str || msg) && isFunny )) /* str='' is false and msg='haha! is true. 
Hence, so, (str || msg) is true and isFunny='false' is true because false is under 
inverted comma. Finally, !(true && true) is false*/
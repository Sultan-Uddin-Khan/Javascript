//const let var
// const ProductName = 'Potato';
// const ProductPrice = 30;
// const ProductQuantity = 3;
// const ProductAvailability = 'True';

const ProductInfoArr = ['Potato', 30, 3, 'True']
const [ProductName, ProductPrice,, ProductAvailability] = ProductInfoArr;
console.log(ProductName, ProductPrice, ProductAvailability);
//index count start on 0
//console.log( ProductInfo[0])
//console.log( ProductInfo[3])
//console.log(`Product Name- ${ProductInfoArr[0]} Product Price- ${ProductInfoArr[1]} Quantity-${ProductInfoArr[2]} Is Available- ${ProductInfoArr[3]}`)
//console.log (ProductName === ProductAvailability);
//Object
const ProductInfoObj =
{
    ProductName: 'Potato',
    ProductPrice:30,
    ProductQuantity:3,
    ProductIsAvailable: 'True',

}

function ShowProductInfo (ProductObj)

{
    console.log(ProductObj);
    const {ProductName, ProductPrice, ProductQuantity, ProductIsAvailable} = ProductObj;
    return `

    ProductName-${ProductName} ProductPrice- ${ProductPrice} Quantity-${ProductQuantity} IsAvailable- ${ProductIsAvailable}
    `;
}

//console.log(ProductInfoObj['ProductName']);
//console.log(ProductInfoObj.ProductPrice);

const product1= ShowProductInfo(ProductInfoObj);
console.log(product1);


/*
Basic and Primitive Types:
Number (4, 9.3, -10), 
String ('Hello World', '43'), 
Boolean (True, False), 
Null and Undefined, 
Symbol (!==)
*/
//String
/*
Single or Double Quotes OK
'Hello World'
"Hello World"  

Concatenation
"Charlie" + "Browon" //"CharlieBrown"

Escape Characters Start With "\"
"Singin \"Do wah diddy, diddy, dum diddy do""
This is Backlash: \\"

Strings have length property
"Hello World".length //11

Access individual character using [] and an index
"Hello"[0] \\"H"
"Hello"[4] \\"o"

Number
4 
9.3
-10

We can do some math
4+10 //14
1/5 //0.2

Modulo-remainder Operator
10%3 \\1
24%3 \\0

Null is explicitely nothing
var current player = "Charlie"
currentplayer= "null" 

Variable

var
let
const

Variable is a container in memory space and save data. We will give a name.

They follow this pattern

//var yourVariableName= yourValue;
// var name= "Rusty";
// var secretNumber = 73;
// var isAdorable= true;

Recall the stored value by the variable name
 var name= "Rusty";
 "hello there" + name  //"hello there Rusty"

 var num =37;
 num +3 +10  //50

 //We can also update existing variables,
 var name= "Robert"
 name= "Bob"

 We won't use var keyword to avoid bad practice. Rather we will use let and const.
 let firstName= 'Sultan';
 firstName= 'Khan'  You can change your reference

 const firstName= 'Sultan';
 firstName= 'Khan'  Throw you an error
 






*/
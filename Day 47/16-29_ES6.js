//Problem 16
const createPerson = (name, age, gender) => {
    // Only change code below this line
    return {
      name,
      age,
      gender
    };
    // Only change code above this line
  };
  console.log(createPerson("Zodiac Hasbro", 56, "male"))

  //Problem 17
  // Only change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  // Only change code above this line
  bicycle.setGear(48);
  console.log(bicycle.gear);

  //Problem 18
  // Only change code below this line
class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  // Only change code above this line
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Should display 'carrot'

  //Problem 19
  // Only change code below this line
class Thermostat {
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
    
    get temperature() {
      return (5 / 9) * (this.fahrenheit - 32);
    }
    
    set temperature(celsius) {
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius
  console.log(thermos.temperature)

//   //Problem 21
//   const uppercaseString = (string) => {
//     return string.toUpperCase();
//   }
  
//   const lowercaseString = (string) => {
//     return string.toLowerCase()
//   }
  
//   export { uppercaseString, lowercaseString };

// //Problem 22
//   import { uppercaseString, lowercaseString } from './string_functions.js';
// // Only change code above this line

// uppercaseString("hello");
// lowercaseString("WORLD!");

// //Problem 23
// import * as stringFunctions from "./string_functions.js"
// // Only change code above this line

// stringFunctions.uppercaseString("hello");
// stringFunctions.lowercaseString("WORLD!");

// //Problem 24
// export default function subtract(x, y) {
//   return x - y;
// }

// //Problem 25
// import subtract from "./math_functions.js";
// // Only change code above this line

// subtract(7,4);


//Problem 27
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data")// Change this line
  } else {  
   reject ("Data not received") // Change this line
  }
});

//Problem 28
const makeServerRequest1 = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest1.then(result => {
  console.log(result)
});

//Problem 29
const makeServerRequest2 = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
makeServerRequest2.catch(error => {
  console.log(error)
});
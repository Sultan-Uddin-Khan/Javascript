//Problem 9
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  const {today,tomorrow}=HIGH_TEMPERATURES;
  // Only change code above this line
  console.log(today,tomorrow);

  //Problem 10
  const HIGH_TEMPERATURES1 = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES1; 
  // Only change code above this line
  console.log(highToday,highTomorrow)

  //Problem 11
  const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
  const { today: { low: lowToday, high: highToday1 }} = LOCAL_FORECAST;  
  // Only change code above this line
  console.log(highToday,lowToday)

  //Problem 12
  let a = 8, b = 6;
// Only change code below this line
[b,a]=[a,b]
console.log(a,b)

//Problem 13
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a,b,...arr] = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr)

//Problem 14
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Only change code below this line
  const half = ({max,min}) =>(max + min) / 2.0;
  // Only change code above this line
  console.log(half(stats))

//Problem 15
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for(let i=0;i<arr.length;i++){
      failureItems.push(`<li class="text-warning">${result.failure[i]}</li>`)
    }
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
  console.log(failuresList) 
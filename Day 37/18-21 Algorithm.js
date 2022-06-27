//Problem 18 (Solution 1)
function truthCheck(collection, pre) {
    // Is everyone being true?
    return collection.every(obj => obj[pre]);
  }
  console.log(truthCheck(
    [{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot"
    ));
  
//Problem 18 (Solution 2)
    function truthCheck1(collection, pre) {
      return collection.every(function (element) {
        return element.hasOwnProperty(pre) && Boolean(element[pre]);
      });
    }
   console.log(truthCheck1(
      [{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot"
      ));

//Problem 19
function addTogether() {
    const [first, second] = arguments;
    if (typeof(first) !== "number")
      return undefined;
    if (second === undefined)
      return (second) => addTogether(first, second);
    if (typeof(second) !== "number")
      return undefined;
    return first + second;
  }
  console.log(addTogether("2", 3))

  //Problem 20
  var Person = function(firstAndLast) {
    let fullName = firstAndLast;
  
    this.getFirstName = function() {
      return fullName.split(" ")[0];
    };
  
    this.getLastName = function() {
      return fullName.split(" ")[1];
    };
  
    this.getFullName = function() {
      return fullName;
    };
  
    this.setFirstName = function(name) {
      fullName = name + " " + fullName.split(" ")[1];
    };
  
    this.setLastName = function(name) {
      fullName = fullName.split(" ")[0] + " " + name;
    };
  
    this.setFullName = function(name) {
      fullName = name;
    };
  };
  
  var bob = new Person("Bob Ross");
  console.log(bob.getFullName());

  //Problem 21
  function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    return arr.map(({ name, avgAlt }) => {
      const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow((earthRadius + avgAlt), 3)/GM));
      return { name, orbitalPeriod };
    });
  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));

function frankenSplice(arr1, arr2, n) {
    var arr1Copy = arr1.slice();
    console.log(arr1Copy);
    var arr2Copy = arr2.slice();
    console.log(arr2Copy);

    for (var i = 0; i < arr1.length; i++) {
        arr2Copy.splice(n+i, 0, arr1Copy[i]);
    }
    return arr2Copy;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));



function bouncer(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
  }
 console.log(bouncer([null, NaN, 1, 2, undefined])); 


function bouncer(arr) {
    return arr.filter(Boolean);
  }
  console.log(bouncer([null, NaN, 1, 2, undefined]));


function getIndexToIns(arr, num) {
      for(let i=0;i<=arr.length;i++){
        if(arr[i]<num || arr.length==0){
            arr.push(num); 
            break;           
        }  
    }
    arr.sort(function(a, b) {
        return a - b;
      }); 
     for(let j=0;j<arr.length;j++){
       if(arr[j]==num) {
        return j;
       }
     }    
  }
  
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));



function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}
console.log(mutation(["Noel", "Ole"]));



function chunkArrayInGroups(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
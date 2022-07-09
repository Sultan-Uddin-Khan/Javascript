// //get request
// function getTodos(){
//  fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((res)=>{
//         return res.json()
//     })

//   .then((data)=>console.log(data))
//   .catch((err)=>console.log(err)) 

// }
// getTodos();

// function getTodo(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//        .then((res)=>{
//            return res.json()
//        })
   
//      .then((data)=>console.log(data))
//      .catch((err)=>console.log(err)) 
   
//    }
//    getTodo();

   //Post adding new data to server

// function addToDo(){
//     fetch('https://jsonplaceholder.typicode.com/todos/',{
//         method:'POST',
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//           },
//         body:JSON.stringify({
//            title:'Hello World',
//            completed:false
//         }),
//        })
//     .then((res)=>{return res.json()
//     })
//      .then((data)=>console.log(data))
//      .catch((err)=>console.log(err)) 
// }
// addToDo();
   //Put/Patch (updating data to server)
//    function updateToDo(){
//     fetch('https://jsonplaceholder.typicode.com/todos/1',{
//         method:'PUT',
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//           },
//         body:JSON.stringify({
//            title:'updated data',
//            completed:true
//         }),
//        })
//     .then((res)=>{return res.json()
//     })
//      .then((data)=>console.log(data))
//      .catch((err)=>console.log(err)) 
// }
// updateToDo();
   //delete (delete data from server)
   function deleteToDo(){
    fetch('https://jsonplaceholder.typicode.com/todos/1',{
        method:'DELETE',
   })
    .then((res)=>{return res.json()
    })
     .then((data)=>console.log(data))
     .catch((err)=>console.log(err)) 
}
deleteToDo();
// // console.log(1)
// // getNumber(2,function(num){
// //     console.log(num)
// // })
// // console.log(3)

// // function getNumber(num,callback){
// // setTimeout(()=>{
// // console.log('Calling After 2 Seconds');
// // callback(num);    
// // },2000);  
// // }


// // //callback hell
// // console.log(getUser(1, function(user){
// //     console.log(user)
// //     enrolledCourse(user.name,function(course){
// //         console.log(course);
// //         getPrice(course[0],function(){
// //             console.log('Javascript Course Price is 4000')
// //         })
// //     })
// // }))
// // function getUser(id,callback){
// //     setTimeout(()=>{
// //      callback({
// //         id:1,
// //         Name:'Adnan',
// //         profession:'Web Developer'
// //      })
// //     },2000)
// // }

// // function enrolledCourse(firstName,callback){
// //     setTimeout(()=>{
// //         callback(['Javascript','Node.js','React'])
// //        },2000)
// // }

// // function getPrice(courseName,callback){
// //     setTimeout(()=>{
// //      callback()
// //     },2000)
// // }


// // //Promise
// // const result=new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //     //  resolve('I will be done after 5 seconds')
// //      reject(new Error('Some error occured'))
// //     },2000);
// // });

// // result.then(text=>{
// //     console.log(text)
// // })
// // .catch(err=>{
// //     console.log(err.message);
// // })

// // Use Prmise to find user
// getUser(1)
//     .then(user=>{
//         console.log(user)
//        return enrolledCourse(user.firstName)})
//     .then(courses=>
//         {console.log(courses);
//        return getPrice(courses[0])})
//        .then(()=>{
//            console.log('Course Price is 4000')
//        })
//     .catch(err=>err.message)


// function getUser(id){
//   return  new Promise((resolve,reject)=>
//        setTimeout(()=>{
//         resolve({
//            id:1,
//            name:'Sultan',
//            profession:'Electrical Engineer'
//         })
//     }),2000) 
//     }

// function enrolledCourse(firstName){
//         return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         resolve(['Javascript','Node.js','React'])
//        },2000);
//     })   
// }

// function getPrice(courseName){
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     resolve()
//    },2000);
// })   
// }
    
// //Promise All
// const p1=Promise.resolve('step 1')
// const p2=Promise.resolve('step 2')
// const p3=Promise.resolve('step 3')

// Promise.all([p1,p2,p3])
// .then((result)=>{console.log(result)
// })
// .catch(err=>{
//    console.log(err) 
// })

// Promise.race([p1,p2,p3])
// .then((result)=>{console.log(result)
// })
// .catch(err=>{
//    console.log(err) 
// })

function getUser(id){
    return  new Promise((resolve,reject)=>
         setTimeout(()=>{
          resolve({
             id:1,
             name:'Sultan',
             profession:'Electrical Engineer'
          })
      }),2000) 
      }
  
  function enrolledCourse(firstName){
          return new Promise((resolve,reject)=>{
          setTimeout(()=>{
          resolve(['Javascript','Node.js','React'])
         },2000);
      })   
  }
  
  function getPrice(courseName){
      return new Promise((resolve,reject)=>{
      setTimeout(()=>{
      reject(new Error('Error'))
     },2000);
  })   
  }

//   async function getResult(){
//     const user=await getUser(1);
//     console.log(user)
//     const course=await enrolledCourse(user.name);
//     console.log(course)
//     const price=await getPrice(course[0]);
//     console.log(price);
//   }
// getResult();

try{
    async function getResult(){
        const user=await getUser(1);
        console.log(user)
        const course=await enrolledCourse(user.name);
        console.log(course)
        const price=await getPrice(course[0]);
        console.log('Price 4000');
        
    }
    getResult();
}

catch(err){
    console.log(err)
}

// Asynchronous Programming from Video

//Call Back pattern
function one(fn){
    setTimeout(() => {
      fn(1)  
    }, 2000);
    
}

function two(){
    return 2
}

function three(){
    return 3
}

const callbackFnOne=(value)=>{
    console.log(value)
};

console.log(one(callbackFnOne))
console.log(two())
console.log(three()) 

//Promise Pattern
//Call Back pattern
function one1(fn){
   return new Promise((resolve,reject)=>{
      setTimeout(() => {
       resolve (1)  
    }, 2000);  
    })  
}

function three1(num){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
         resolve (num)  
      }, 2000);  
      })  
}

one1().then((value)=>{
        three1(value+2).then((data)=>{
         console.log(data)
        }).catch(err=>console.log(err))
        })
.catch((err)=>{
    console.log(err)
})

//callback hell
function three2(fn,num){
        setTimeout(() => {
         fn(num)  
      }, 2000);      
}

function one2(fn){
    setTimeout(() => {
        fn(1)  
     }, 2000);  
 }
one2((value)=>{
    console.log(value);
    three2((value)=>{
        console.log(value)
    },value+2)
})
    
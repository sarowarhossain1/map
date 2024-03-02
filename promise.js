// যখন একটি ওয়েব সার্ভার থেকে একটি ব্রাউজার  a একটি ফাইল লোড করা হবে 
// তখন ফাইল  এর বিষয়বস্তু গুলো  উপলব্ধ করা হয় না  ফাইল টিকে প্রথমে 
// নেটওয়ার্ক স্থানান্তর করতে হবে৷

// let promise = new Promise(function(resolve, reject){
//        alert("hlw")
//        resolve(56)
// })
// console.log(promise)

// function myDisplayer(some) {
//       console.log( some)
//   }
  
//   function disFunction(some){
//     console.log(some)
//   }

//   let myPromise = new  Promise(function(resolve, reject){
//     let x = 20;

//       if(x > 15){
//         resolve("ok")
//       }
//       else{
//         reject("err")
//       }
//   })
// myPromise.then(
//     function(value){disFunction(value)},
//     function(error){disFunction(error)}
// )

function  showFun(some){
    console.log(some)
}

// let myPromise = new Promise(function(resolve, reject){
//      let x = 30

//      if(x<35){
//         resolve("ok")
//      }
//      else{
//         reject("error")
//      }
// })

// myPromise.then(
//     function(value){showFun(value)},
//     function(error){showFun(error)}
// )

let p = new Promise((resolve, reject)=>{
    console.log("promise is pending")

     setTimeout(()=>{
        console.log("I am promise I am a Fulfilled")
        resolve(true)
     },5000)
})


let arry =[1,3,5,7]

function disFun(arr,callback){
    let copy = [...arr]
    let result =[]
   for(let i = 0; i<copy.length; i++){
     let output = (callback(copy[i]))
      result.push(output + 15)
   }
   return result
  
}
let result = disFun(arry,callFun)
console.log(result)

function callFun(item){
    return item * 5
}
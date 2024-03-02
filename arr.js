let array = [3,5,8,10]

let callFun= (data,callback) =>{
    let result = []
    for(let i =0; i<data.length; i++){
       let output =(callback(data[i]))
       result.push(output + 5) 
    } 
       return result
}
let child=(item)=>{
   let value = item+5
   return value
}

  let result = callFun(array, child)
console.log(result)



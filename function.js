let num1 = (callback) =>{
    let x = 5
    console.log(callback(x))
}

let num2 = (data) =>{
    return data *2
}
num1(num2)

let arr = [5,15,45,85]

let  disFun = (data,callback) =>{
    let result = []
    for(let i = 0; i<data.length; i++){
        let value =  callback(data[i])
         result.push(value)
    }
    return result
}
  
let showFun = (item)=>{
     return item*2
}
let output = disFun(arr, showFun)
console.log(output)
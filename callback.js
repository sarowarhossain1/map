let num = [3,7,15,30]

let disFun = (arr,callback) =>{
  let result = []
    for(let i = 0; i<arr.length; i++){
       result.push( callback( arr[i]))
    }
    return result;
}

let child = (item)=>{
      let value = item *3
      return value
}

let newArry = disFun(num, child)
console.log(newArry)

// let num = [5, 7, 20, 30];

// let displayFun = (arr, callback) => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i]);
//   }
//   return result;
// };

// let child = (item) => {
//   let value = item * 3;
//   return value;
// };
// let output = displayFun(num, child);
// console.log(output);

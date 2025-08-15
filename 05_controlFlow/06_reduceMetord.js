// reduce is basically use to perform operation in elements of array in order to reduce it to form single value

let nums = [1,2,3,4,5,6,7,8,9]


let cartValue = nums.reduce( (accumilator , currentValue)=> {

    console.log(` accum value = ${accumilator}, curruent value = ${currentValue}`)

    return accumilator + currentValue
}, 1)

console.log(cartValue)

//syntax

// arr.map( ()=>{

//     ...functionallity 
//     return according to recuriment 
// }, intial value that accumilator take intially )
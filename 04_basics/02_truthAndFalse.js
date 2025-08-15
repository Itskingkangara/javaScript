// // in conditon statement array have differenet value , string have different value particully considering boolean values

// // 0 , -0 , false, BigInt 0n , "", NaN , undefined, null --> all considered as false value 

// //other than this above value all considered as true 
// //eg  '0' , "0", "false", function(){} ..... they are just example of truth value

// //check whether the object is empty of not 

// let a= {}

// if(Object.keys(a).length === 0){ //-- this Object.key() return array of object and we are just checking the length of array 
//     console.log(" your object is empty")
// }

// // ***********************************
// // nolish coalescing operator (??): not define  
// // --basically use to check the value is not null , we will see in detail later 

// let value

// value = 5?? 10 // in this 1st value get assined to variable
// value = null ?? 10 // 10 get assined 
// value = undefined ?? 10 // 10 get assined 
// value = 10 ?? undefined // 10 get assined 


// terniary 
//condition ? true: false

let num=8 

num ===8 ? console.log(" yes its true"): console.log(" no true")



//for of loops

let arr=[ 1,2,3,4,5,6,7]

for (const value of arr) {
    // console.log(value) 
    // // this loop auto manage the the staring , ending of any data type like objec, arr , string etc.

    // name as for Of loop 
}

// *****************   OBJECTS   ********************************

// loops on objects 

// let obj= {
//     name: "Harshit",
//     aim : " learner "
// }

// for(const value of obj){

//     console.log(value)
// } // maps are not iteratable like this and even with key value methord also  that is given below

//********************   Maps   ************ 

let map= new Map() // it is a object use to store the key value pair 

map.set(`one`, 1)
map.set('two' , 2) //store unique value

//loops on maps 
// for(const [key, value] of map){
//     console.log(key , ":- " , value)
// }

//retrive value using key
// console.log(map.get('one'))


// *********************   for in loop   ****************************
//as for of loop is not working in objects 

let obj= {
    name: "Harshit",
    aim : " learner "
}

for (const key in obj) {
    
    // console.log(key)//to get key values 
    // console.log(obj[key]) // to get value 
}


//for in loops on array
 
let arr1= ["music", "comedy", "physical Games", "travel"]

for (const key in arr1) {
    // console.log(key) // this will print key means index of arr
    // console.log(arr1[key]) // this will print actual value of array 
}

// for in loops on map 

for(const key in map){
    console.log(key) // as maps are not iteratable so it give nothing as output
}



// console.log(Math.PI)// give constant value , now the question is why we are not able to change it like below

let temp = Math.PI=6 //can't be change becz of the below reson 

//console.log(Object.getOwnPropertyDescriptor(Math, 'PI')) 
// this above says
// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

const obj = {
    num: 5, 
    name : 'harshit'
} // now I want to edit that properties 

Object.defineProperty(obj , 'num', {
    writable:false //now value of num can't  be edit
})

console.log(Object.getOwnPropertyDescriptor(obj , 'num'))
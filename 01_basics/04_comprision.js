//strict ckeck by ===

//if we check with == then it will convert one data type into another in order to compare 2 things

console.log("4"==4)

console.log(4==="4")// this opretion gives answer as false becz it compare 
                    // datatype also
console.log(4===4) //give true answer

//symbol basics 

const id1=Symbol('123')
const id2=Symbol('123')

console.log(id1===id2)

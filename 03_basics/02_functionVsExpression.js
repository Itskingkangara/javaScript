//function 
function addOne(num ){
    return num+1
}

console.log(addOne(5))
 
//in JavaScript variable have lot of power as they can also store function.

//expression
let addTwo = function (num){
    return num+2
}

console.log(addTwo(5))



// ********************  INTRESTING  **************************** //

let temp=addThree(5)//calling before declaring
console.log(temp)

function addThree(num){
    return num+3        //normal funtion declaration is allowed if function gets call before declaration 
}


//case of expression 

// addFour() //this will give error while above nrml declaration will not 

console.log(addFour(5)) // its not allowed as function is stored in variable 

let addFour = function( num ){
    return num+4
}


console.log(addFive(5))

//first wy

function addFive(num1){
    return num1+5
}

//second way 

let store= function addFive(num1 ){
    return num1+5; 
}



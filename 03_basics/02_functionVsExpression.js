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
    return num+3
}


//case of expression 

//addFour() //this will give error while above nrml declaration will not 

let addFour = function( num ){
    return num+4
}




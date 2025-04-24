//rest opretor
//like calculate cart value in which user can add any no of diff product and you need to calculate sum of this

function calculateCartValue(...num){//this (...) is also called as rest oprator 
    //spread and rest oprator looks same but have diff use case 
    return num

}

console.log(calculateCartValue(100,200,300,400,500))//you are allowed to push any no of no 
//it returns arr for which we can perform any opreations


//function in object
const obj1={
    name: {
        firstName: " Harshit ",
        lastName: " Gupta"
    }
}

function handleObj(object){
    console.log(object.name.lastName)
}

//function calling 
// handleObj(obj1)

//another way
//direct passing object without creating one 
handleObj(
    {
        name: {
            firstName: " Harshit ",
            lastName: " Gupta"
        }
    }
)

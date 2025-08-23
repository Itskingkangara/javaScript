function outer(){
    let input1= "Its inputOne"

    function inner(){
        console.log(input1)  //this inner function is allowed to acess outer function varible know as lexical scope 
    }

    inner()
}
outer()

////********CLOSURE*********** */

function outer(){
    let input1= "Its inputOne"

    function inner(){
        console.log(input1)  
    }
    return inner()//return is new here
    // when innerOne get called there laxical scope get passed due to which inner is allowed to use outer funciton's varible know as CLOSURE
}

outer()
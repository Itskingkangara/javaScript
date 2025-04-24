let user ={
    name: " Harshit Gupta ", 
    price : 18999,

    welcomeMessage : function(){
        console.log(`welcome ${this.name} in your TECH world `)//to use variable of object you need to use " this " keyword
        
        console.log(this)
    }
}

// user. welcomeMessage() //without changing 

// user.name=" Rohit Sharma "
// user. welcomeMessage()

// console.log(this) //this will print empty object in node enviroment (javaScript executing through node not with console in browser)


// *******************Arrow Function***************************//

//using "this" in function 

function fun(){
    let userName= " Harshit Gupta"
    console.log(this.userName) // output of this is undefined as it is allowwed in objects only and this is functions
}

// fun() 

//lets initiate arrow functions 

const fun1= () =>{
    let username = " Harshit Gupta "
    console.log(this)
}

fun1() //the output of this gets changed


//implicit return vs explicit return 

//diff way to write function 
let add1 = (num1, num2) =>{
    return num1+num2
}

//2nd way
let add2 = (num1, num2) => num1+ num2 //without using return keyword , it is allowed 

//another way
let add3 = (num1, num2) => 
    (num1+ num2)  //by using (), you don't need to use Return keyword

console.log(`${add1(2,1)}--num1 , ${add2(3,2)}---num2, ${add3(4,3)}---num3`)


let mul = (num1, num2)=>{
    return num1*num2
}

console.log(mul(2,4))
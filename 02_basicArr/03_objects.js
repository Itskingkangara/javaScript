//singelton objects : are declared using 
// Object.create

//non sigelton object creation 
let user = {
    name : "Harsit ", // "name" is in string as well as "harshit"
    age : 18 , //here "age " is in string 
    lastLogins :[`${this.name} and Wednesday`], 
}

//2 ways to acess object details 
// console.log(user.name)
 console.log(user["age"]) // as age is in string 
// 2nd way is important becz

const newObj = {
    "Name": " Harshit Gupta", 
    " Age ": 18, 
}

//if we want to acess this object information then " dot wala metord will not work "

//dot wala methord
// console.log(newObj.name) //gives undefine

//while
console.log(newObj["Name"])//there is no other way to print String object like name 


//********************************************* */
//symbol declaration 
const symbol1= Symbol(" s1") //s1 is a key while symbol1 is represneting symbol

//using symbol in object

const mySym= Symbol("key2")

const trySymbol ={
    [mySym]:"key1",
}

console.log(trySymbol[mySym])// only way to acess symbol trough objects
//symbol needs to be define outside object and then can be used inside object

//if we want no further change in particular object then we can use freeze
Object.freeze(newObj)
newObj.Name="Gupta ji "//name will not change and nor error will be shown 

console.log(newObj.Name)


// ************************************************
//function creation
const a={
    name: "Harshit gupta"
}

a.greeting = function(){
    console.log(" hello users welcome here ")
}

console.log(a.greeting)// function call hua but execute nhi hua h 
console.log(a.greeting())//actually function call happens and it executed

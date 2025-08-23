//javaScript follow protoType behaviour means if it does not get the value demanded or asked it futher escilated to parent function in order to find that value until it doesnt get null in result 
 
//array ----> object ------> null {array and other data type are ultmatlly object and object is final value means object have no parents further so it refers to null }
// to experience this better we can create array in brower wnviroment and in their properties , at last we find object 
// similarlly string ------> object ------> null 

function mulWith5(num){
    return num*5
}

//as from above knowlegde function is also object 
mulWith5.power = 4//we added power in function 

console.log(mulWith5.power)

// prototype : The prototype in JavaScript is like a shared storage of methods and properties that all instances of an object can use, without copying them for each instance.

function createUser(userName , age){
    this.userName= userName
    this.age= age
}

//we willing to add new functionality
createUser.prototype.printUserName = function(){
    console.log(this.userName)
}

createUser.prototype.incAge =function(){
    this.age++
}

//as we added this functionality newlly we need to use new keyword 
const updatedCreateUser = new createUser('Harshit', 23)
updatedCreateUser.incAge()//using addOn functions 
updatedCreateUser.printUserName()//printing through addOn functions 

console.log(updatedCreateUser.age)//accesing function as object 


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
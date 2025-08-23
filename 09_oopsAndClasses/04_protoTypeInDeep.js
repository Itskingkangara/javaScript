//as we discussed earlier every functions and dataType have prototype of object , that means if we add properties or finctionality to object directlly then we can use it everywhere 

//as javaScript show protoType behaviour so if asked funcitonality does no find in the given function js go further to parent class in order to find and in object we alredy defined it 

Object.prototype.interferenceWithObj = function(){
    // console.log('hey buddy')
}

const newArray = [1,2,3,4]
newArray.interferenceWithObj() // accesing things of object 

const str = "does't Matter"
str.interferenceWithObj()


//now we will learn about interference 

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //TA have access to teaching suppport object 
}

// console.log(TeachingSupport.makeAssignment) //its not working now need to check after connection to oject how to acces the properties of other object 

//new mordern syntax

//now mordernSyntax provide us a facility to directlly connect to object
Object.setPrototypeOf(Teacher, TeachingSupport)
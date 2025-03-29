// declaration through contruction call which is singelton in nature
const newObj= new Object()

newObj.id="123abc"
newObj.Name= " Harshit Gupta "

console.log(newObj)

//objects under objects 

const obj= {
    userName :{
        userFullName: {
            firstName: " harshit",
            lastName: " Gupta"
        }
    }
}

console.log(obj.userName.userFullName.firstName)


//merging 2 or more objects
let obj1={1:'a'}
let obj2={2:'b'}
let obj3={3:'c'}

let obj4= Object.assign({}, obj1,obj2, obj3)

// console.log(obj4)

//better way is spread operator 
obj4= {...obj1, ...obj2, ...obj3}
console.log(obj4)
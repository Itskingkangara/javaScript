const obj1={
    courseInsturctor :" Harshit gupta",
    age : 23,
    present : true ,

}

//de-stucturing --> 
//to acess element of of=bject you need to write 
//obj.name
//it can also be return as 
const {courseInsturctor :Instructor}=obj1
//now name can directlly be used as NA
console.log(Instructor)

//another example 

let anotherObj={
    name : " virendra pratap shingh ", 
    age : 35
}

let {name : generalName }= anotherObj

console.log(generalName)
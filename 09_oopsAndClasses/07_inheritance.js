class user{
    constructor(userName){
        this.userName= userName
    }

    printMe = function(){
        console.log(`UserName is ${this.userName}`)
    }
}

//suppose we are building this for students and teacher 

class teachers extends user {//teacher extends user means teacher will have all the properites and funcitonality of user class 

    constructor(userName, Name , passWord){
        super(userName) //super automatic pass the current refrece to user class 
        this.Name = Name
        this.passWord = passWord
    }

    
}

const newTeacher = new teachers('teacherJi' , 'hitesh', 1242)
newTeacher.printMe()

//**********instacne of is used to check is one is instace of other */

console.log(newTeacher instanceof teachers) //say true
console.log(newTeacher instanceof user)//say true

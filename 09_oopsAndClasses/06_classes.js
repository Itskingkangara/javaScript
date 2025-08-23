
class createUser{

    constructor(Name , userName , Password ){
        this.Name = Name
        this.userName = userName
        this.Password= Password
    }

    //some random functions 
    encrypt(){
        return this.Password+'abc'
    }
}

//as class is use to create multiple instace for same code
const user = new createUser('Harshit', 'Gupta_321' , 123)

console.log(user.encrypt())


//as class is a wrapper only and under the hood working we alredy know 

function userName(name , userName , passWord){
    this.name= name 
    this.userName= userName
    this.passWord= passWord+'abc'

    function encrypt(){
        console.log(`${passWord}`)
    }
}   

const user1 = userName ('Harshit', 'Gupta_321' ,123)
console.log(user.encrypt())
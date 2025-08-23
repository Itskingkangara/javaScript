function setUserName(userName){
    this.userName= userName
}

function setUser(userName , eMails , passWord){

    // setUserName(userName) //user name set in SetUserName context only and get flushed out after execution 
    setUserName.call(this, userName) // call help to hold the value and this refrece to the current function context 
    this.eMails = eMails
    this.passWord= passWord
}

const newUser = new setUser(' Harshit ', 'thatsEmail', 123)

console.log(newUser)
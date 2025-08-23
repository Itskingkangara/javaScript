function user(email, password ){
    this._email= email 
    this._password= password

    Object.defineProperty(this, 'email', {
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this._email= value
        }
    })
}

const newUser = new user ('harshit', 132)
console.log(newUser.email)
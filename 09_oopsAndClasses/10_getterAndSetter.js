class user{
    constructor(name, userName , email ){
        this.name= name 
        this.userName= userName
        this.email= email
    }

    // get or set can't ge used alone

    get name(){
        return this._name.upperCase //this value get retured to user 
    }

    set name(value){
        this._name = value //
    }

    //for every property different get and set metord must to set

}

const newUser = new user('nameee', 'userNameeee', "132465@gmail.com")

console.log(newUser)
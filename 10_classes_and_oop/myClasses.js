/* class User {
    constructor(user, email, password){
        this.user = user;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.user.toUpperCase()}`
    }
} */
/* 
const chai = new User("Shivam", "chai@gmail.com", "123")
console.log(chai.encryptPassword())
console.log(chai.changeUsername()) */

//Behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}abc`;
}

const chai = new User("Shivam", "chai@gmail.com", "123")
console.log(chai.encryptPassword())


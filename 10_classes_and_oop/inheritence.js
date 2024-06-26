class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourses(){
        console.log(`A new course added by ${this.username}`)
    }
}

const hitesh = new Teacher("shivam", "teach@gmail.com", "abs")
hitesh.addCourses()
console.log(hitesh)
const masalachai = new User("barya");
masalachai.logMe()
hitesh.logMe()
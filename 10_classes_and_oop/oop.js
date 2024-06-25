const user = {
    username: "Shivam",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log(`Got user details from DB name ${this.username}`)
        console.log(this)
    }
}

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    // return this;
}

const userone = new User("Shivam", 12, false)
const usertwo = new User("chaiaurcode", 12, false)
console.log(userone)
console.log(usertwo)
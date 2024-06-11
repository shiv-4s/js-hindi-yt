//Object literals


const mySym = Symbol("key1");

const user = {
    name : "Shivam",
    "full Name": "Shivam Barya",
    [mySym] : "mykey1",
    age : 18,
    location : "hyderabad",
    email : "barya@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(user["full Name"])
// console.log( typeof user["mySym"]);

// user.email = "barya@salesforce.com";
// console.log(user);
// Object.freeze(user);
// user.email = "barya@ust.com";
// console.log(user);


user.greetingOne = function(){
    console.log("Hello JS User");
}

user.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);
}

console.log(user.greetingOne());
console.log(user.greetingTwo());
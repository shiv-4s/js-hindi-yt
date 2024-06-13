const user = {
    username: "Shivam",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username},  welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Barya"
// user.welcomeMessage()

// console.log(this)

// function chai() {
//     let username = "Barya"
//     console.log(this.username)
// }

// chai()


// const chai = ()=>{
//     let username = "Shivam"
//     console.log(this)
// }
// chai()


const addTwo = (num1, num2)=> num1+num2

console.log(addTwo(10, 20))
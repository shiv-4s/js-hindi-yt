//  IF

// if (true) {
//     // code will execute
// }
// if (false) {
//     // code will not execute
// }

// const temperature = 54;

// if (temperature < 50) {
//     console.log("less than 50")
// }
// else{
//     console.log("temperature is greater than 50")
// }


// const score = 200;
// if (score > 100) {
//     let power = "fly"
//     console.log(`User Power: ${power}`)
// }
// console.log(`User Power: ${power}`)


// const balance = 100;
// const result = balance > 500 ? true : false;

// console.log(result)

const isLoggedIn = true;
const loggedInFromEmail = true;

if (isLoggedIn && loggedInFromEmail && 2==3) {
    console.log("Allow to buy course")
}

if (isLoggedIn || loggedInFromEmail) {
    console.log("User logged in")
    
}
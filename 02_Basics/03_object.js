// const tinderUser = new Object() // yeh ek singleton object hai
// const tinderUser = {}
// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false;
// console.log(tinderUser);

// const regularUser = {
//     email : "some@gmail.com",
//     fullname : {
//         username : {
//             firstName: "Shivam",
//             lastName: "Barya"
//         }
//     }
// }

// console.log(regularUser.fullname.username.firstName);

const b1 = {1 : "a", 2 : "b"}
const b2 = {3 : "c", 4 : "d"}

// const b3 = {...b1, ...b2}

const b3 = Object.assign( b1, b2)
console.log(b3);
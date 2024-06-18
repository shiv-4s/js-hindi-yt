// const myObj = {
//     "Js" : "javascript",
//     "cpp" : "c++",
//     "RB" : "Ruby",
//     "sft" : "Swift"
// }


// for (const key in myObj) {
//     if (Object.hasOwnProperty.call(myObj, key)) {
//         const element = myObj[key];
//         console.log(element)
        
//     }
// }

// const programming = ["js", "java", "cpp", "swft"];

// for (const key in programming) {
//     console.log(programming[key])
// }

const map = new Map();
map.set("In", "India")
map.set("USA", "United States Of America")
map.set("JPA", "Japan")

for (const key in map) {
    console.log(key)
}
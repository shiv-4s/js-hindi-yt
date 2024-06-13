
// var c = 300
let a = 300;
if (true) {
    let a = 10;
    const b = 30;
    // console.log(a)
    
}
// console.log(a)


function one() {
    const username = "shivam";
    function two() {
        const website = "youtube"
        // console.log(username)
    }
    // console.log(website)
    two()
}
one()

// +++++++++++++++++++++++interesting++++++++++++++++++++

console.log(addOne(5));
function addOne(num) { //   function decalaration mein hoisting allow hota hai(means you can access function before declaration)
    return num+1;
}

console.log(addtwo(5));
const addtwo = function(num) {  //  function expression mein hoisting allow nhi hoti hai
    return num+2;
    
}


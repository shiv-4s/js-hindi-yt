// function sayMyName(){
//     console.log("S");
//     console.log("H");
//     console.log("I");
//     console.log("V");
//     console.log("A");
//     console.log("M");
// }

// sayMyName()

// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2)
// }

function addTwoNumber(number1, number2) {
    let result = number1 + number2;
    return result
}

const result = addTwoNumber(10, 20)
// console.log("result: ", result)


function loginUserMessage(username = "alina") {
    if (!username) {
        console.log("Please enter a valid username")
    }
    else { 
        return `${username} just logged in`;
    }
}

// let res = loginUserMessage()
// console.log(res)


function calculateCartPrice(v1, v2, ...nums){
    return (nums)                                   //  return nums array [300]
}
// console.log(calculateCartPrice(100, 200, 300))

const user ={
    username: "Shivam",
    prices: 2000
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject?.price}`)
    
}

handleObject(user)





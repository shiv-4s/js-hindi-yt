//FOR LOOP

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     if(element === 5){
//         console.log("5 is best number!!!!!!")
//     }
//     console.log(element)
    
// }

// console.log(element)


// for (let i = 1; i <=10; i++) {
//    // console.log(`Outer loop ${i}`)
//     for (let j = 1; j <=10; j++) {
//         //console.log(`Inner loop ${j} and inner loop ${i}`)        
//         console.log( i + '*' + j + ' = ' + i*j)
//     }
// }


// const myArray = ["flash", "Batman", "Superman"]

// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element)
// }


// BREAK AND CONTINUE


for (let i = 1; i <= 10; i++){
    if (i === 5) {
        console.log(`Detected ${i}`)
        continue;
    }
    console.log(`Value of i is ${i}`)
}
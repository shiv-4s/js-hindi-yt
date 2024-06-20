const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const res = myNumbers.map(item => item + 10);

const newNums = myNumbers.map(item => {
    return item * 10
}).map(item => {
    return item + 1
}).filter(item =>{
    return  item >= 40
})

console.log(newNums)
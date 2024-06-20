// const myNums = [1, 2, 3, 4, 5];
// const initialValue = 0;
// const res = myNums.reduce((acc, curr) => {
//     console.log(`acc value is ${acc}, curr value is ${curr}`)
//     return acc + curr;
// }, initialValue);
// console.log(res)

const shoppingCart = [
    {
        itemName: "js course",
        price : 2999
    },
    {
        itemName: "py course",
        price : 999
    },
    {
        itemName: "app course",
        price : 3999
    },
    {
        itemName: "web course",
        price : 4999
    },
]

const totalAmount = shoppingCart.reduce((acc, item)=>{
    return acc + item.price
}, 0)
console.log(totalAmount)
//Arrays

const myArr = [0, 1, 2, 3, 4, 5]
// const myHeroes = ["Captain", "SuperMan"]
// const myArr2 = new Array(1, 2, 4, 5);
// console.log(myArr.push(8));
// console.log(myArr);
// console.log(myArr.pop());

// console.log(myArr.includes(3));

// const  newArr = myArr.join();
// console.log(newArr);
// console.log(typeof newArr);

// const sliceArr = myArr.slice(1, 3); //   slice method will not changed the original array
// console.log(myArr);
// console.log(sliceArr);

// const spliceArr = myArr.splice(1, 3);    //  spilce will changed the original array
// console.log(myArr);
// console.log(spliceArr);

const marvelHeros = ["thor", "Ironman", "spiderman"]
const dcHeros = ["superman", "flash", "batman"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);

const allHeros = [...marvelHeros, ...dcHeros]
console.log(allHeros);
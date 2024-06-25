/* const promiseOne = new Promise(function(resolve, reject){
    //Do an aysnc task
    setTimeout(() => {
        console.log('Async task is complete')
        resolve()
    }, 1000);
});

promiseOne.then(()=>{
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Async task two');
        resolve()
    }, 1000);
}).then(()=>{
    console.log('Async 2 resolved')
}) */

/* const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: "Chai", email: "chai@gmail.com"})
    }, 1000);
})

promiseThree.then(resolve=>{
    console.log(resolve)
}) */

/* const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Shivam", password: "123$@" })
        }
        else {
            reject("ERROR: Something went wrong!!!!!!")
        }
    }, 1000)
})

promiseFour.then(resolve => {
    console.log(resolve)
    return resolve.username;
}).then(username => {
    console.log(username)
}).catch(reject => {
    console.log(reject)
}).finally(()=>{
    console.log("result already has given to user")
}) */

/* const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: "Javascript", password: "123$@" })
        }
        else {
            reject("ERROR: JS went wrong!!!!!!")
        }
    }, 1000)
});

async function consumePromiveFive() {
    try {
        const response = await promiseFive;
        console.log(response)
    } catch (error) {
        console.log(error)

    }

} */

// consumePromiveFive()

/* async function getAllUser(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data  = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
   

} */

fetch('https://api.github.com/users/shiv-4s')
.then(resolve => {
    return resolve.json();
})
.then(data=>{
    console.log(data)
})
.catch(reject=> {
    console.log(reject)
})



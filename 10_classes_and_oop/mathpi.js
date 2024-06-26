let dcpt = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(dcpt)

const chai = {
    name: "ginger tea",
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log("Chai nhi bani")
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, "name",{
    writable: false,
    enumerable: false,
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        console.log(`${key}: ${value}`)

    }

}

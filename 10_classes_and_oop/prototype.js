/* let myName = "Shivam        "
let myChanel = "Chanel       "

console.log(myChanel.trueLength) */

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "Hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidey power is ${this.spiderman}`)
    }
}

Object.prototype.shivam = function(){
    console.log(`shivam is present in all object`)
}

Array.prototype.heyShivam = function(){
    console.log(`shivam says helo`)
}

// heroPower.shivam()

myHeros.shivam()
myHeros.heyShivam()
heroPower.heyShivam()
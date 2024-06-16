// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)


(function chai() {
    //  NAMED IIFE
    console.log("DB connected")
})();

( () => {
    console.log("DB CONNECTED 2")
})();


( (name) => {
    console.log(`DB CONNECTED 2 ${name}`)
})("Shivam")

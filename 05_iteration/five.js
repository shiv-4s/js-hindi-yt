// const coding = ["js", "ruby", "python", "cpp", "java"]
// coding.forEach((item, index, array) => {

//     console.log(item, index, array)
    
// })

const myCoding = [
    {
        langName: "Javascript",
        langFileName: "js"
    },
    {
        langName: "cpp",
        langFileName: "cpp"
    },
    {
        langName: "java",
        langFileName: "java"
    },
    {
        langName: "python",
        langFileName: "py"
    }
]

myCoding.forEach(item => {
    console.log(item.langName)
});
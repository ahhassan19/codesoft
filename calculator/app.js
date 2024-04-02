var output = document.getElementById("outputInp")
var clear = document.getElementById("clear")
var equalBtn = document.getElementById("equalBtn")
console.log(output)
var btns = document.querySelectorAll("input")

var outputVal = "";

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        var value = btn.value
        if (value != " =") {
            outputVal += value
            output.value = outputVal
            console.log(value)
            console.log(outputVal)
        }
    })
})

equalBtn.addEventListener("click", () => {
    outputVal = eval(outputVal)
    console.log(outputVal)
    output.value = outputVal
})
clear.addEventListener("click", () => {
    outputVal = ""
    console.log(outputVal)
    output.value = outputVal
})


console.log(btns)
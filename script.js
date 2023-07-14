const inputFirstNumber = document.querySelector("#firstNumber")
const inputSecondNumber = document.querySelector("#secondNumber")
const btnPlus = document.querySelector("#btnPlus")
const btnMinus = document.querySelector("#btnMinus")
const btnDivided = document.querySelector("#btnDivided")
const btnMultiply = document.querySelector("#btnMultiply")
const btnMod = document.querySelector("#btnMod")
const result = document.querySelector("#result")
btnPlus.addEventListener('click', () => result.innerHTML = parseFloat(inputFirstNumber.value) + parseFloat(inputSecondNumber.value))
btnMinus.addEventListener('click', () => result.innerHTML = inputFirstNumber.value - inputSecondNumber.value)
btnDivided.addEventListener('click', () => result.innerHTML = inputFirstNumber.value / inputSecondNumber.value)
btnMultiply.addEventListener('click', () => result.innerHTML = inputFirstNumber.value * inputSecondNumber.value)
btnMod.addEventListener('click', () => result.innerHTML = inputFirstNumber.value % inputSecondNumber.value)
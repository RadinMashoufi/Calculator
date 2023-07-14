const firstNumber = document.querySelector('#firstNumber')
const pi = 3.1415
const btnPlus = document.querySelector('#btnPlus')
const result = document.querySelector('#result')
btnPlus.addEventListener ('click', ()=> result.innerHTML = (parseFloat(firstNumber.value) * pi ))
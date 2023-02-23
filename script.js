const slider = document.querySelector('.slider')
const sliderValue = document.querySelector('#sliderValue')
const generateBtn = document.querySelector('#generate-btn')
const upperCheckbox = document.querySelector('#upper')
const lowerCheckbox = document.querySelector('#lower')
const symbolsCheckbox = document.querySelector('#symbols')
const numbersCheckbox = document.querySelector('#numbers')
const outputPassword = document.querySelector('#outputPassword')
const copyToClipboardBtn = document.querySelector('.fa-copy')
const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWYZ'
const lowerCaseLetters = 'abcdefghijklmnopqrstuwvyz'
const symbols = '!@#$%^&*()_+-'
const numbers = '123456789'
let combined = ''

setInterval(updateValue, 100)

generateBtn.addEventListener('click',() => {
    checkCheckboxValues()
    let password = ''
    for(let i = 0; i < slider.value; i++){
        let randomNum = Math.floor(Math.random() * combined.length)
        password += combined[randomNum]
    }
    outputPassword.value = password
})

function checkCheckboxValues(){
    combined = ''
    if(upperCheckbox.checked){
        combined += upperCaseLetters
    }
    if(lowerCheckbox.checked){
        combined += lowerCaseLetters
    }
    if(symbolsCheckbox.checked){
        combined += symbols
    }
    if(numbersCheckbox.checked){
        combined += numbers
    }
}

function copy(){
    outputPassword.select()
    outputPassword.setSelectionRange(0, 30)
    navigator.clipboard.writeText(outputPassword.value)
    alert('Copied to clipboard!')
}

function updateValue(){
    sliderValue.innerText = `Password length: ${slider.value}`
}

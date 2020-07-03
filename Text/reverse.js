const input = document.querySelector('input')
const button = document.querySelector('button')
const div = document.querySelector('div')


const reverseText = (text) => {
    const arrayText = text.split("")
    const reverseTextArray = arrayText.reverse()
    const joinText = reverseTextArray.join("")
    
    return joinText
}


button.addEventListener('click', () => {
    const inputValue = input.value
    const reverse = reverseText(inputValue)
    div.textContent = reverse
})


const cartArray = []

function displayName(playerName) {
    const tableBodey = document.getElementById('name-list')
    tableBodey.innerHTML = ''
    for (let i = 0; i < playerName.length; i++) {
        const name = cartArray[i]

        const tr = document.createElement('tr')
        tr.innerHTML = `
        <th>${i + 1}.</th>
        <td> ${name}</td<
        `

        if (cartArray.length > 5) {
            alert("You can't add more than 5 players")
            return
        }
        else (
            tableBodey.appendChild(tr)
        )
    }
}

function addToCart(element) {
    const playerName = element.parentNode.children[0].innerText
    cartArray.push(playerName)
    document.getElementById('player-selected').innerText = cartArray.length
    displayName(cartArray)
    element.disabled = true
}
// text filed to number fumction
function textToNumber(elementId) {
    const textFild = document.getElementById(elementId)
    const textString = textFild.innerText
    const textNumber = parseFloat(textString)
    return textNumber
}
// input filed function
function input(inputElement) {
    const inputElemint = document.getElementById(inputElement);
    const inputString = inputElemint.value;
    const inputNumber = parseFloat(inputString)
    inputElemint.value = ''
    return inputNumber
}
// set element function
function setTextElementById(elementId, newElement) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newElement

}

document.getElementById('Calculate').addEventListener('click', function () {

    const nambersOfPalyer = textToNumber('player-selected')
    const perPlayerAmount = input('per-player')
    const playerExpenses = nambersOfPalyer * perPlayerAmount

    setTextElementById('player-expenses', playerExpenses)
})

document.getElementById('calculate-total').addEventListener('click', function () {
    const playerExpenses = textToNumber('player-expenses')
    const managerAmount = input('manager')
    const coachAmount = input('coach')

    const total = playerExpenses + managerAmount + coachAmount
    setTextElementById('total', total)
})
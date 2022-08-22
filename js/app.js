
const cartArray = []

function displayName(playerName) {
    const oderList = document.getElementById('name-list')
    oderList.innerHTML = ''
    for (let i = 0; i < playerName.length; i++) {
        // console.log(cartArray[i])
        const name = cartArray[i]
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <th>${i + 1}. </th>
        <td> ${name}</td<
        `
        oderList.appendChild(tr)
    }
}
function addToCart(element) {
    const playerName = element.parentNode.children[0].innerText
    cartArray.push(playerName)
    // console.log(cartArray.length)
    document.getElementById('player-selected').innerText = cartArray.length
    displayName(cartArray)
}
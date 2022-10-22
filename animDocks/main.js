const board = document.querySelector('#board');
const color = ['red', 'purple', 'blue', 'green', 'yellow', 'orange', 'pink']
const SQUARES_NUMBER = 216

for (let k = 0; k < SQUARES_NUMBER; k++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = `${color}`
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    element.style.border = '4px solid #fff'

}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #111`
    element.style.border = 'none'
}

function getRandomColor() {
    const indexColor = Math.floor(Math.random() * color.length)
    return color[indexColor]
}
const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0

loveMe.addEventListener('dblclick', (e) => {
    createHeart(e)
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fa-solid')
    heart.classList.add('fa-face-grin-wide')

    const x = e.clientX
    const y = e.clientY

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)
}
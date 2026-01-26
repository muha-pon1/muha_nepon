const switchBlock = document.querySelector('.switch')
const eyeBlock = document.querySelector('.eye')
const cherniyBlock = document.querySelector('.cherniy')
const blickBlock = document.querySelector('.blick')
const vekoBlock = document.querySelector('.veko')

switchBlock.addEventListener('click',()=>{
    switchBlock.classList.toggle('closedswitch')
    eyeBlock.classList.toggle('closedeye')
    cherniyBlock.classList.toggle('closedblack')
    blickBlock.classList.toggle('closedblick')
    vekoBlock.classList.toggle('closedveko')
})


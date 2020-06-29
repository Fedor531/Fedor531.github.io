const hours = document.querySelector('.time__hours')
const minutes = document.querySelector('.time__minutes')
const seconds = document.querySelector('.time__seconds')


function getSeconds() {
    const date = new Date()
    return date.getSeconds()
}
function getMinutes() {
    const date = new Date()
    return date.getMinutes()
}
function getHours() {
    const date = new Date()
    return date.getHours()
}

function changeTime() {
    seconds.textContent = getSeconds()
    minutes.textContent = getMinutes()
    hours.textContent = getHours()
}

setInterval(changeTime, 1000)
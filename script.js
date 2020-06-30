function changeTime() {
  const date = new Date()
  checkHours(date.getHours())
  checkMinutes(date.getMinutes())
  checkSeconds(date.getSeconds())
}

function checkHours(hour) {
  const hourElementText = document.querySelector('.time__hours').textContent
  if (hour !== Number(hourElementText)) {
    document.querySelector('.time__hours').textContent = checkWriting(hour)
  }
}

function checkMinutes(minute) {
  const minuteElementText = document.querySelector('.time__minutes').textContent
  if (minute !== Number(minuteElementText)) {
    document.querySelector('.time__minutes').textContent = checkWriting(minute)
  }
}

function checkSeconds(second) {
  document.querySelector('.time__seconds').textContent = checkWriting(second)
}

function checkWriting(number) {
  let newNumber = number
  if (newNumber < 10) {
    newNumber = `0${number}`
  }
  return newNumber
}

setInterval(changeTime, 1000)

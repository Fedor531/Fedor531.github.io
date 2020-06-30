function changeTime() {
  const date = new Date()
  checkHours(date.getHours())
  checkMinutes(date.getMinutes())
  checkSeconds(date.getSeconds())
}

function checkHours(hour) {
  const hourElement = document.querySelector('.time__hours').textContent
  let newHour = hour
  if (newHour !== Number(hourElement)) {
    document.querySelector('.time__hours').textContent = checkWriting(newHour)
    console.log('перерисовка часов произошла')
  }
}

function checkMinutes(minute) {
  const minuteElement = document.querySelector('.time__minutes').textContent
  let newMinunte = minute
  if (newMinunte !== Number(minuteElement)) {
    document.querySelector('.time__minutes').textContent = checkWriting(newMinunte)
    console.log('перерисовка минуты произошла')
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

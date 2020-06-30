function changeTime() {
  const date = new Date()
  checkHours(date.getHours())
  checkMinutes(date.getMinutes())
  document.querySelector('.time__seconds').textContent = date.getSeconds();
}

function checkHours(hour) {
  const hours = document.querySelector('.time__hours').textContent
  if (hour !== Number(hours)) {
    document.querySelector('.time__hours').textContent = hour
    console.log('перерисовка часов произошла')
  }
}

function checkMinutes(minute) {
  const minutes = document.querySelector('.time__minutes').textContent
  if (minute !== Number(minutes)) {
    document.querySelector('.time__minutes').textContent = minute
    console.log('перерисовка минуты произошла')
  }
}



setInterval(changeTime, 1000)

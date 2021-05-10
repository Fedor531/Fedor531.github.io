(function () {

  function changeTime() {
    const date = new Date()
    checkHours(date.getHours())
    checkMinutes(date.getMinutes())
    document.querySelector('.time__seconds').textContent = formatingNumber(date.getSeconds())
  }

  function checkHours(hour) {
    const hourElementText = document.querySelector('.time__hours').textContent
    if (hour !== hourElementText) {
      redrawHours(hour)
    }
  }

  function redrawHours(hour) {
    document.querySelector('.time__hours').textContent = formatingNumber(hour)
  }

  function checkMinutes(minute) {
    const minuteElementText = document.querySelector('.time__minutes').textContent
    if (minute !== minuteElementText) {
      redrawMinutes(minute)
    }
  }

  function redrawMinutes(minute) {
    document.querySelector('.time__minutes').textContent = formatingNumber(minute)
    console.log('перерисовка минуты произошла')
  }

  function formatingNumber(number) {
    let newNumber = number
    if (newNumber < 10) {
      newNumber = `0${number}`
    }
    return newNumber
  }

  setInterval(changeTime, 1000)

})()

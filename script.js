function changeTime() {
  const date = new Date()
  document.querySelector('.time__hours').textContent = date.getHours();
  document.querySelector('.time__minutes').textContent = date.getMinutes();
  document.querySelector('.time__seconds').textContent = date.getSeconds();
}

setInterval(changeTime, 1000)

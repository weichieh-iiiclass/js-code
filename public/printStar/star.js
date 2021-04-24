const start = document.getElementById('start')
const display = document.getElementById('display')

const starArray = []
const star = `*`

start.addEventListener('click', function () {
  let num = +document.getElementById('num').value

  for (let i = 0; i < num; i++) {
    starArray.push(`${star.repeat(i + 1)}`)
  }
  for (let i = num - 1; i > 0; i--) {
    starArray.push(`${star.repeat(i)}`)
  }

  starArray.forEach((value) => (display.innerHTML += `${value}<br/>`))
})

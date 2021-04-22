const num = document.getElementById('num')
const subnum = document.getElementById('subnum')
const addnum = document.getElementById('addnum')

subnum.addEventListener('click', function () {
  num.innerHTML = Number(num.innerHTML) - 1
})

addnum.addEventListener('click', function () {
  num.innerHTML = Number(num.innerHTML) + 1
})

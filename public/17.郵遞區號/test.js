const test = document.getElementById('test')
const display = document.getElementById('display')

let testDisplay = ''
test.addEventListener('change', function () {
  const selectTest = +test.value
  testDisplay += `test.value:${test.value},${typeof test.value}</br>`
  testDisplay += `selectTest:${selectTest},${typeof selectTest}</br>`

  display.innerHTML = testDisplay
})

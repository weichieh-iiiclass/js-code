const title = document.getElementById('title')
const calendarHead = document.getElementById('calendarHead')
const calendarBody = document.getElementById('calendarBody')
const optionYear = document.getElementById('optionYear')
const optionMonth = document.getElementById('optionMonth')

const calHeaders = ['日', '一', '二', '三', '四', '五', '六']

// `<th>${calHeaders[i]}</th>`
let tableHeader = ''
for (let i = 0; i < calHeaders.length; i++) {
  tableHeader += `<th>${calHeaders[i]}</th>`
}
calendarHead.innerHTML = tableHeader

function creatOptions(min, max) {
  let options = `<option value="">請選擇</option>`
  for (let i = min; i < max + 1; i++) {
    options += `<option value="${i}">${i}</option>`
  }
  return options
}

optionYear.innerHTML = creatOptions(1940, 2021)
optionMonth.innerHTML = creatOptions(1, 12)

function calendarDisplay(year, month) {
  title.innerHTML = `${year}/${month}`
  const days = new Date(year, month, 0).getDate()
  const firstDay = new Date(year, month - 1, 1).getDay()

  const daysDataArray = []
  for (let j = 0; j < firstDay; j++) {
    daysDataArray.push('')
  }

  for (let i = 0; i < days; i++) {
    daysDataArray.push(i + 1)
  }
  let calBody = ''
  // 只能用daysDataArray.length不能用days,因為array前面有塞四個空格
  for (let i = 0; i < daysDataArray.length; i++) {
    calBody += `<td>${daysDataArray[i]}</td>`
    if ((i + 1) % 7 == 0) calBody += '</tr><tr>'
  }
  calendarBody.innerHTML = `<tr>${calBody}</tr>`
}

let selectedYear = 0
let selectedMonth = 0

optionYear.addEventListener('change', function () {
  selectedYear = Number(optionYear.value)
  console.log('selectedYear', selectedYear)

  if (selectedYear && selectedMonth) {
    calendarDisplay(selectedYear, selectedMonth)
  }
})

optionMonth.addEventListener('change', function () {
  selectedMonth = Number(optionMonth.value)
  console.log('selectedMonth', selectedMonth)

  if (selectedYear && selectedMonth) {
    calendarDisplay(selectedYear, selectedMonth)
  }
})

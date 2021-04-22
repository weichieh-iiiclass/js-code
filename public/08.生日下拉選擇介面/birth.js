const year = document.getElementById('year')
const month = document.getElementById('month')
const day = document.getElementById('day')

// 暫存選項內容
let yearOption = `<option value="">請選擇西元年</option>`
let monthOption = `<option value="">請選擇月</option>`
let dayOption = `<option value="">請選擇日</option>`

// 年
for (let i = 2021; i > 1940; i--) {
  yearOption += `<option value="${i}">${i}</option>`
}
year.innerHTML = yearOption

// 月
for (let i = 1; i < 13; i++) {
  monthOption += `<option value="${i}">${i}</option>`
}
month.innerHTML = monthOption

// 日
for (let i = 1; i < 32; i++) {
  dayOption += `<option value="${i}">${i}</option>`
}
day.innerHTML = dayOption

/// 記錄目前使用者選擇的值(數字)
let birthY = 0
let birthM = 0
// let birthD = 0

year.addEventListener('change', function () {
  birthY = Number(year.value)
  birthM = Number(month.value)

  if (birthY && birthM) {
    const newDay = new Date(birthY, birthM, 0).getDate()
    let dayOption = `<option value="">請選擇日</option>`
    for (let i = 1; i <= newDay; i++) {
      dayOption += `<option value="${i}">${i}</option>`
    }
    day.innerHTML = dayOption
  }
})

month.addEventListener('change', function () {
  birthY = Number(year.value)
  birthM = Number(month.value)

  if (birthY && birthM) {
    const newDay = new Date(birthY, birthM, 0).getDate()
    let dayOption = `<option value="">請選擇日</option>`
    for (let i = 1; i <= newDay; i++) {
      dayOption += `<option value="${i}">${i}</option>`
    }
    day.innerHTML = dayOption
  }
})

// day.addEventListener('change', function () {
//   birthD = Number(day.value)
// })

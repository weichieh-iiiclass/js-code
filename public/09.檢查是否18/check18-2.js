const year = document.getElementById('year')
const month = document.getElementById('month')
const day = document.getElementById('day')
const check18 = document.getElementById('check18')
const result = document.getElementById('result')

// 暫存選項內容
// let yearOption = `<option value="">請選擇西元年</option>`
// let monthOption = `<option value="">請選擇月</option>`
// let dayOption = `<option value="">請選擇日</option>`

// 年
function creatOptions(min, max) {
  let options = `<option value="">請選擇</option>`
  for (let i = min; i < max + 1; i++) {
    options += `<option value="${i}">${i}</option>`
  }
  return options
}

year.innerHTML = creatOptions(1940, 2021)
month.innerHTML = creatOptions(1, 12)
day.innerHTML = creatOptions(1, 31)

/// 記錄目前使用者選擇的值(數字)
let birthY = 0
let birthM = 0
let birthD = 0

year.addEventListener('change', function () {
  birthY = Number(year.value)
  birthM = Number(month.value)

  if (birthY && birthM) {
    const newDay = new Date(birthY, birthM, 0).getDate()
    day.innerHTML = creatOptions(1, newDay)
    day.disabled = false
  }
})

month.addEventListener('change', function () {
  birthY = Number(year.value)
  birthM = Number(month.value)

  if (birthY && birthM) {
    const newDay = new Date(birthY, birthM, 0).getDate()
    day.innerHTML = creatOptions(1, newDay)
    day.disabled = false
  }
})

day.addEventListener('change', function () {
  birthD = Number(day.value)
})

check18.addEventListener('click', function () {
  if (birthY && birthM && birthD) {
    const now = new Date()
    const nowY = now.getFullYear()
    const nowM = now.getMonth() + 1
    const nowD = now.getDate()

    let isOver18 = false
    if (nowY - birthY > 18) isOver18 = true
    if (nowY - birthY == 18 && nowM - birthM > 0) isOver18 = true
    if (nowY - birthY == 18 && nowM - birthM == 0 && nowD - birthD > 0)
      isOver18 = true

    result.innerText = isOver18 ? '已滿18歲' : '未滿18歲'
  } else {
    result.innerText = '請先選擇出生年月日'
  }
})

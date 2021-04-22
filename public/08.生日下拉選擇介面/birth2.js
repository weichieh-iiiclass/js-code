const year = document.getElementById('year')
const month = document.getElementById('month')
const day = document.getElementById('day')

// 產生選項的function
function creatOptions(min, max) {
  let options = `<option value="">請選擇</option>`
  for (let i = min; i < max + 1; i++) {
    options += `<option value="${i}">${i}</option>`
  }
  return options
}

// call functioin
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
  console.log(birthY)
})

month.addEventListener('change', function () {
  birthY = Number(year.value)
  birthM = Number(month.value)

  if (birthY && birthM) {
    const newDay = new Date(birthY, birthM, 0).getDate()
    day.innerHTML = creatOptions(1, newDay)
    day.disabled = false
  }
  console.log(birthM)
})

day.addEventListener('change', function () {
  birthD = Number(day.value)
  console.log(birthD)
})

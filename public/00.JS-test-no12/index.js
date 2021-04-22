// price
// const red = 20
// const green = 15

// botton
const teaText = document.getElementById('tea-text')
const teaRed = document.getElementById('tea-red')
const teaGreen = document.getElementById('tea-green')

const sugarText = document.getElementById('sugar-text')
const sugarNormal = document.getElementById('sugar-normal')
const sugarHalf = document.getElementById('sugar-half')

const iceText = document.getElementById('ice-text')
const iceNormal = document.getElementById('ice-normal')
const iceHalf = document.getElementById('ice-half')

const countText = document.getElementById('count-text')
const addOne = document.getElementById('add-one')
const subOne = document.getElementById('sub-one')

const addOrder = document.getElementById('add-order')
const resetOrder = document.getElementById('reset-order')

// Display
const orderList = document.getElementById('order-list')
const orderTotal = document.getElementById('order-total')

let tea = ''
teaRed.addEventListener('click', function () {
  tea = '紅茶'
  teaText.innerHTML = `茶種：${tea}`
})
teaGreen.addEventListener('click', function () {
  tea = '綠茶'
  teaText.innerHTML = `茶種：${tea}`
})

let sugar = ''
sugarNormal.addEventListener('click', function () {
  sugar = '正常糖'
  sugarText.innerHTML = `甜度：${sugar}`
})
sugarHalf.addEventListener('click', function () {
  sugar = '半糖'
  sugarText.innerHTML = `甜度：${sugar}`
})

let ice = ''
iceNormal.addEventListener('click', function () {
  ice = '正常冰'
  iceText.innerHTML = `冰度：${ice}`
})
iceHalf.addEventListener('click', function () {
  ice = '半冰'
  iceText.innerHTML = `冰度：${ice}`
})

let count = 1
let priceDisplay = 0
addOne.addEventListener('click', function () {
  count += 1
  countText.innerHTML = `數量：${count}`
  let price = 0
  if (tea === '紅茶') price += 20 * count
  if (tea === '綠茶') price += 15 * count
  console.log(price)
  priceDisplay = price
})
subOne.addEventListener('click', function () {
  count -= 1
  countText.innerHTML = `數量：${count}`
  let price = 0
  if (tea === '紅茶') price += 20 * count
  if (tea === '綠茶') price += 15 * count
  console.log(price)
  priceDisplay = price
})
//   console.log('tea', tea)
//   console.log('count', count)

// display table
let orderNum = 0
let totalPrice = 0
addOrder.addEventListener('click', function () {
  orderNum += 1
  orderList.innerHTML += `<tr><td>${orderNum}</td><td>${tea}</td><td>${sugar}</td><td>${ice}</td><td>${count}</td><td>${priceDisplay}</td></tr>`

  totalPrice += priceDisplay
  orderTotal.innerHTML = `總計：${totalPrice}`
})
resetOrder.addEventListener('click', function () {
  tea = ''
  sugar = ''
  ice = ''
  count = 1
  teaText.innerHTML = `茶種：${tea}`
  sugarText.innerHTML = `甜度：${sugar}`
  iceText.innerHTML = `冰度：${ice}`
  countText.innerHTML = `數量：${count}`
  console.log(tea, sugar, ice, count)
})

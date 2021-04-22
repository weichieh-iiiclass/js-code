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
let sugar = ''
let ice = ''
let count = 1
const orderItems = [] //存放所有的訂單

function display() {
  teaText.innerHTML = `茶種：${tea}`
  sugarText.innerHTML = `甜度：${sugar}`
  iceText.innerHTML = `冰度：${ice}`
  countText.innerHTML = `數量：${count}`
}

function creatOrderItems(tea, sugar, ice, count) {
  let price = 0
  if (tea === '紅茶') price = 20 * count
  if (tea === '綠茶') price = 15 * count
  console.log(tea, sugar, ice, count, price)
  return {
    id: +new Date(),
    tea: tea,
    sugar: sugar,
    ice: ice,
    count: count,
    orderPrice: price,
  }
}

teaRed.addEventListener('click', function () {
  tea = '紅茶'
  display()
})
teaGreen.addEventListener('click', function () {
  tea = '綠茶'
  display()
})

sugarNormal.addEventListener('click', function () {
  sugar = '正常糖'
  display()
})
sugarHalf.addEventListener('click', function () {
  sugar = '半糖'
  display()
})

iceNormal.addEventListener('click', function () {
  ice = '正常冰'
  display()
})
iceHalf.addEventListener('click', function () {
  ice = '半冰'
  display()
})

addOne.addEventListener('click', function () {
  count += 1
  display()
})
subOne.addEventListener('click', function () {
  count -= 1
  if (count < 1) count = 1
  display()
})

// display table
// {
//     id: +new Date(),
//     tea: tea,
//     sugar: sugar,
//     ice: ice,
//     count: count,
//     orderPrice: price,
//   }

addOrder.addEventListener('click', function () {
  //產生單一個訂單
  const orderItem = creatOrderItems(tea, sugar, ice, count)
  console.log(orderItem)
  // 存放到array裡面
  orderItems.push(orderItem)
  let totalPrice = 0
  let bodyDisplay = ''
  for (let i = 0; i < orderItems.length; i++) {
    totalPrice += orderItems[i].orderPrice
    console.log(totalPrice)

    bodyDisplay += `<tr><td>${orderItems[i].id}</td><td>${orderItems[i].tea}</td><td>${orderItems[i].sugar}</td><td>${orderItems[i].ice}</td><td>${orderItems[i].count}</td><td>${orderItems[i].orderPrice}</td></tr>`
  }
  orderList.innerHTML = `${bodyDisplay}`
  orderTotal.innerHTML = `總計：${totalPrice}`
})
resetOrder.addEventListener('click', function () {
  tea = ''
  sugar = ''
  ice = ''
  count = 1
  display()
})

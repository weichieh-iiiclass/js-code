// dice number
const computer = document.getElementById('computer')
const user = document.getElementById('user')
const computerDice = document.getElementById('computerDice')
const userDice = document.getElementById('userDice')

// button
const startGame = document.getElementById('startGame')

// result
const result = document.getElementById('result')

// click
startGame.addEventListener('click', function () {
  computer.innerText = Math.floor(Math.random() * 6) + 1
  const computerNum = Number(computer.innerText)
  user.innerText = Math.floor(Math.random() * 6) + 1
  const userNum = Number(user.innerText)

  // 判斷computer的數字並顯示出對應圖片
  //  <i class="fas fa-dice-one"></i>
  let iconString = ''
  switch (computerNum) {
    case 1:
      iconString = 'one'
      break
    case 2:
      iconString = 'two'
      break
    case 3:
      iconString = 'three'
      break
    case 4:
      iconString = 'four'
      break
    case 5:
      iconString = 'five'
      break
    case 6:
      iconString = 'six'
      break
  }

  computerDice.innerHTML = `<i class="fas fa-dice-${iconString}"></i>`
  // 判斷user的數字並顯示出對應圖片
  //  <i class="fas fa-dice-one"></i>
  let iconString2 = ''
  switch (userNum) {
    case 1:
      iconString2 = 'one'
      break
    case 2:
      iconString2 = 'two'
      break
    case 3:
      iconString2 = 'three'
      break
    case 4:
      iconString2 = 'four'
      break
    case 5:
      iconString2 = 'five'
      break
    case 6:
      iconString2 = 'six'
      break
  }
  userDice.innerHTML = `<i class="fas fa-dice-${iconString2}"></i>`

  // compare
  if (computerNum > userNum) result.innerText = '電腦贏了'
  if (computerNum < userNum) result.innerText = '你贏了'
  if (computerNum == userNum) result.innerText = '平手'
})

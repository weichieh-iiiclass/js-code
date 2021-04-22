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

  // 判斷數字並顯示出對應圖片,使用array
  //  <i class="fas fa-dice-one"></i>
  let diceArray = ['one', 'two', 'three', 'four', 'five', 'six']
  computerDice.innerHTML = `<i class="fas fa-dice-${
    diceArray[computerNum - 1]
  }"></i>`
  userDice.innerHTML = `<i class="fas fa-dice-${diceArray[userNum - 1]}"></i>`

  // compare
  if (computerNum > userNum) result.innerText = '電腦贏了'
  if (computerNum < userNum) result.innerText = '你贏了'
  if (computerNum == userNum) result.innerText = '平手'
})

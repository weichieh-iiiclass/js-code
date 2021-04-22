// dice number
const computer = document.getElementById('computer')
const user = document.getElementById('user')

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

  // compare
  if (computerNum > userNum) result.innerText = '電腦贏了'
  if (computerNum < userNum) result.innerText = '你贏了'
  if (computerNum == userNum) result.innerText = '平手'
})

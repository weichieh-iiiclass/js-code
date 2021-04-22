// 剪刀石頭布
const computer = document.getElementById('computer')
const user = document.getElementById('user')
const display = ['剪刀', '石頭', '布']
const displayPic = ['scissors', 'rock', 'paper']
// <i class="far fa-hand-scissors"></i>
// <i class="far fa-hand-rock"></i>
// <i class="far fa-hand-paper"></i>
const computerPic = document.getElementById('computerPic')
const userPic = document.getElementById('userPic')

// button
const startGame = document.getElementById('startGame')

// result
const result = document.getElementById('result')

// click
startGame.addEventListener('click', function () {
  const computerNum = Math.floor(Math.random() * 3)
  const userNum = Math.floor(Math.random() * 3)
  computer.innerText = display[computerNum]
  user.innerText = display[userNum]
  computerPic.innerHTML = `<i class="far fa-hand-${displayPic[computerNum]}"></i>`
  userPic.innerHTML = `<i class="far fa-hand-${displayPic[userNum]}"></i>`

  // compare
  switch (userNum) {
    case 0:
      if (computerNum == 0) result.innerText = '平手'
      if (computerNum == 1) result.innerText = '電腦贏了'
      if (computerNum == 2) result.innerText = '你贏了'
      break
    case 1:
      if (computerNum == 0) result.innerText = '你贏了'
      if (computerNum == 1) result.innerText = '平手'
      if (computerNum == 2) result.innerText = '電腦贏了'
      break
    case 2:
      if (computerNum == 0) result.innerText = '電腦贏了'
      if (computerNum == 1) result.innerText = '你贏了'
      if (computerNum == 2) result.innerText = '平手'
      break
    default:
      result.innerText = 'error'
  }
})

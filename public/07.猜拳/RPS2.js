// 剪刀石頭布
const user = document.getElementById('user')
const computer = document.getElementById('computer')
const scissors = document.getElementById('scissors')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')

// result
const result = document.getElementById('result')

// click
const display = ['剪刀', '石頭', '布']

function play(userNum) {
  const computerNum = Math.floor(Math.random() * 3)
  user.innerHTML = display[userNum]
  computer.innerHTML = display[computerNum]
  // compare
  const range = userNum - computerNum
  if (range === 0) result.innerText = '結果：平手'
  if (range === 1 || range === -2) result.innerText = '結果：你贏了'
  if (range === -1 || range === 2) result.innerText = '結果：電腦贏了'
}

scissors.addEventListener('click', function () {
  play(0)
})
rock.addEventListener('click', function () {
  play(1)
})
paper.addEventListener('click', function () {
  play(2)
})

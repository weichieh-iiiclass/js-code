//
const card = document.getElementById('card')
const startGame = document.getElementById('startGame')

// click
startGame.addEventListener('click', function () {
  const number = Math.floor(Math.random() * 100) + 1

  if (number < 4) card.innerText = '5星卡'
  if (number >= 4 && number < 21) card.innerText = '4星卡'
  if (number >= 21 && number <= 100) card.innerText = '3星卡'
})

//
const card = document.getElementById('card')
const startGame = document.getElementById('startGame')

// click
startGame.addEventListener('click', function () {
  // 0~200的亂數
  const number = Math.floor(Math.random() * 200) + 1

  // 機率1.5%: 0~3
  if (number < 4) {
    const type10 = Math.floor(Math.random() * 10) + 1
    card.innerText = '5星卡-' + type10
  }
  // 機率18.5%: 4~40
  if (number >= 4 && number < 41) {
    const type20 = Math.floor(Math.random() * 20) + 1
    card.innerText = '4星卡-' + type20
  }
  // 機率80%: 41~200
  if (number >= 41 && number <= 200) {
    const type30 = Math.floor(Math.random() * 30) + 1
    card.innerText = '3星卡-' + type30
  }
})

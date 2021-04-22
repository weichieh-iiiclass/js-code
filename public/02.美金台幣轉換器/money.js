// input
const money = document.getElementById('money')

// button
const nt2us = document.getElementById('nt2us')
const us2nt = document.getElementById('us2nt')

// output
const ans = document.getElementById('ans')

// NTD to USD: money/28.53
nt2us.addEventListener('click', function () {
  const finalResult = Number(money.value) / 28.53
  ans.innerHTML = '美金 ' + finalResult + ' 元'
  // ans = parseInt(money.value) / 28.53
  // document.getElementById('ans').innerHTML = ans
})

// USD to NTD: money*28.53
us2nt.addEventListener('click', function () {
  // toFixed(0) 四捨五入到小數點0位
  const finalResult = (Number(money.value) * 28.53).toFixed(0)
  ans.innerHTML = '台幣 ' + finalResult + ' 元'
  // ans = parseInt(money.value) * 28.53
  // document.getElementById('ans').innerHTML = ans
})

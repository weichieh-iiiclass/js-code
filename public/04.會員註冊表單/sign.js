// input
const myName = document.getElementById('myName')
const phone = document.getElementById('phone')
const address = document.getElementById('address')
const account = document.getElementById('account')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// button
const signUp = document.getElementById('signUp')

// check result
const checked = document.getElementById('checked')

signUp.addEventListener('click', function () {
  let error = ''

  // 檢查是否有填寫必要欄位
  if (!myName.value.trim()) error += ' 姓名沒填' + '\xa0\xa0'
  if (!phone.value.trim()) error += ' 電話沒填'
  if (!address.value.trim()) error += ' 住址沒填'
  if (!account.value.trim()) error += ' 帳號沒填'
  if (!password.value.trim()) error += ' 密碼沒填'
  if (!password2.value.trim()) error += ' 密碼確認沒填'

  // 檢查長度
  if (account.value.length < 6) error += ' 帳號至少要6位'
  if (password.value.length < 6) error += ' 密碼至少要6位'

  // 檢查密碼與密碼確認欄位
  if (password.value !== password2.value) error += ' 兩次輸入的密碼不同'

  if (error) {
    checked.innerHTML = error
  } else {
    checked.innerHTML = '表單驗証通過'
  }
})

// input
const weight = document.getElementById('weight')
const height = document.getElementById('height')

// button
const toBMI = document.getElementById('toBMI')

// result
const bmi = document.getElementById('bmi')

// BMI = 體重(公斤) / 身高2(公尺平方)
toBMI.addEventListener('click', function () {
  bmi.innerHTML = Number(weight.value) / Math.pow(Number(height.value) / 100, 2)
  //   bmi.innerHTML =
  //     Number(weight.value) / (Number(height.value) * Number(height.value))
})

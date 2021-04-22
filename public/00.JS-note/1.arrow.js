// ES5
function abc() {
  console.log('hi')
}

// ES6
const abc2 = function (data) {
  console.log(data)
}

abc()
abc2()

// This
// ES6 arrow
const abc3 = () => {
  console.log('abc3')
}
abc3()

//參數一個的時候,可以省略(),(data)省略為data
const abc4 = (data) => {
  console.log('abc4', data)
}

abc4('hi')

// 參數兩個的時候()沒辦法簡寫
const abc5 = (a, b) => {
  console.log('abc5', a + b)
}

abc5(10, 11)

const abc6 = function (a, b) {
  console.log('abc6', a + b)
}

abc6(10, 11)

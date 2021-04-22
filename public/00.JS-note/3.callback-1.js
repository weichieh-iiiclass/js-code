// 執行順序

// js 單執行緒
// 一次只能執行一件事?
// 不會卡住嗎?

function first() {
  console.log('first')
}

// callback function
function second(cb) {
  console.log('second')

  // API GET DATA (用 AJAX 技術 去呼叫後端伺服器的 API)
  // 不一定馬上回傳資料
  // 我們會把這段先丟給 webapi(s) 處理
  // 非同步

  // Promise ES6 callback 寫法
  fetch('./3.callback.json')
    .then((result) => result.json())
    .then((jsonData) => {
      // 忙完之後打個電話給我 CALLBACK, OK?
      console.log('jsonData', jsonData)
      //   return jsonData
      cb(jsonData)
    })
    .then(() => {
      console.log('hi 沒事2')
    })
    .then(() => {
      console.log('hi 真的沒事1')
    })
    .catch(() => {
      return 'error'
    })

  console.log('second-2')
}

// let a = new Promise((resolve,reject)=>{
//     resolve('成功了')

// })

// ES8 Async / Await
// async function doSomething() {
//   await first()
//   let myResult = await second()
//   await third(myResult)
//   await forth(myResult)
// }

function third(jsonData) {
  console.log('third')
  let p = document.getElementById('myData')
  p.innerHTML = jsonData.key1
}

function forth(jsonData) {
  console.log('forth')
  let p = document.getElementById('myData2')
  p.innerHTML = jsonData.key2
}

first()

// 把 function 放到參數裡面傳進去
// 讓他知道執行完之後要呼叫(call)誰
second(third)
second(forth)

// third();

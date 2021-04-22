const title = document.getElementById('title')
const calendarHead = document.getElementById('calendarHead')
const calendarBody = document.getElementById('calendarBody')

const calHeaders = ['日', '一', '二', '三', '四', '五', '六']

// `<th>${calHeaders[i]}</th>`
let tableHeader = ''
for (let i = 0; i < calHeaders.length; i++) {
  tableHeader += `<th>${calHeaders[i]}</th>`
}
calendarHead.innerHTML = tableHeader

// map
// const weekDayDisplayMap = calHeaders.map((v) => `<th>${v}</th>`).join('')
// <th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th>
// console.log(weekDayDisplayMap)

const now = new Date()
const year = now.getFullYear()
const month = now.getMonth() // 現在是幾月January - December : 0 - 11

title.innerHTML = `${year}/${month + 1}`

// 本月有幾天 month=3 代表4月
// 第一天是星期幾 Sunday - Saturday : 0 - 6
const days = new Date(year, month + 1, 0).getDate()
const firstDay = new Date(year, month, 1).getDay()

const daysDataArray = []

for (let j = 0; j < firstDay; j++) {
  daysDataArray.push('')
}

for (let i = 0; i < days; i++) {
  daysDataArray.push(i + 1)
}
console.log(daysDataArray)

// `<th>${calHeaders[i]}</th>`

// <tr>
//<td>The table body</td>
//<td>with two columns</td>
//</tr> */

let calBody = ''
// 只能用daysDataArray.length不能用days,因為array前面有塞四個空格
for (let i = 0; i < daysDataArray.length; i++) {
  calBody += `<td>${daysDataArray[i]}</td>`
  if ((i + 1) % 7 == 0) calBody += '</tr><tr>'
}
calendarBody.innerHTML = `<tr>${calBody}</tr>`
console.log(calBody)
// console.log(calendarHead.innerHTML)

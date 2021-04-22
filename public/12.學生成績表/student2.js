const rawData = `"學生姓名","國文","數學","英文"
"陳小花",90,65,77
"張大頭",80,75,60
"李一百",100,60,85`

const dataTable = document.getElementById('dataTable')

const rawDataArray = rawData.split('\n')
const headingArray = rawDataArray[0].replaceAll('"', '').split(',')

let headingDisplay = ''
for (let i = 0; i < headingArray.length; i++) {
  headingDisplay += `<th>${headingArray[i]}</th>`
}

dataTable.innerHTML = `<thead><tr>${headingDisplay}</tr></thead>`

let bodyDisplay = ''
for (let i = 0; i < rawDataArray.length; i++) {
  bodyDisplay += `<tr>${rawDataArray[i]
    .replaceAll('"', '')
    .split(',')
    .map((v) => `<td>${v}</td>`)
    .join('')}</tr>`
}

dataTable.innerHTML += `<tbody>${bodyDisplay}</tbody>`

const data = [
  { name: '張小花', tel: '02-29879998' },
  { name: '吳阿寶', tel: '02-29871172' },
  { name: '陳天才', tel: '02-29879998' },
]
const display = document.getElementById('display')
let bodyDisplay = ''
for (let i = 0; i < data.length; i++) {
  // console.log(data[i])
  bodyDisplay += `<tr><td>${data[i].name}</td><td>${data[i].tel}</td></tr>`
}
display.innerHTML = bodyDisplay

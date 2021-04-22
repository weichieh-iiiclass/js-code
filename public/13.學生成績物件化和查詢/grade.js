const rawData = `"學生姓名","國文","數學","英文"
"陳小花",90,65,77
"張大頭",80,75,60
"陳大花",90,65,77
"李一百",100,60,85`

const dataTable = document.getElementById('dataTable')
const searchWord = document.getElementById('searchWord')
const search = document.getElementById('search')

// 用分行符號取得多行陣列值
const rawDataArray = rawData.split('\n')

// headings = ["學生姓名", "國文", "數學", "英文"]
const headings = rawDataArray[0].replaceAll('"', '').split(',')

let headingDisplay = ''

for (let i = 0; i < headings.length; i++) {
  headingDisplay += `<th>${headings[i]}</th>`
}

dataTable.innerHTML = `<thead><tr>${headingDisplay}</tr></thead>`

/// 以下呈現學生資料

// 宣告學生空白陣列
const students = []

for (let i = 1; i < rawDataArray.length; i++) {
  const rows = rawDataArray[i].replaceAll('"', '').split(',')

  const student = {
    name: rows[0],
    chinese: +rows[1],
    math: +rows[2],
    english: +rows[3],
  }

  students.push(student)
}

console.log(students)

let bodyDisplay = ''
let chineseTotal = 0
let mathTotal = 0
let englishTotal = 0

for (let i = 0; i < students.length; i++) {
  bodyDisplay += `<tr>
    <td>${students[i].name}</td>
    <td>${students[i].chinese}</td>
    <td>${students[i].math}</td>
    <td>${students[i].english}</td>
    </tr>`

  chineseTotal += students[i].chinese
  mathTotal += students[i].math
  englishTotal += students[i].english
}

bodyDisplay += `<tr>
<td>各科平均</td>
<td>${(chineseTotal / students.length).toFixed(0)}</td>
<td>${(mathTotal / students.length).toFixed(0)}</td>
<td>${(englishTotal / students.length).toFixed(0)}</td>
</tr>`

dataTable.innerHTML += `<tbody>${bodyDisplay}</tbody>`

search.addEventListener('click', function () {
  //   const nameSearchWord = searchWord.value
  //   console.log(nameSearchWord)

  // array.filter(條件)
  //   const newStudents = students.filter( (value, index, array) => value.name.includes(searchWord.value)
  //   )
  const newStudents = students.filter(function (value, index, array) {
    return value.name.includes(searchWord.value)
  })
  console.log(newStudents)
})

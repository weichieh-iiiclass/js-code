const arrayA = [1, 2, 3, 4, 5]

// for (let i=0; i < arrayA.length; i++){
//     console.log('myData', arrayA[i])
// }

// forEach 沒有 return
// 會有副作用 effect(因為有可能會改到原本的array)
// value, index, array其實只看它的順序,不看取甚麼名字,所以可以簡寫
let newArray = []
arrayA.forEach((val, i, arr) => {
  newArray.push(val * 2)
  // newArray[i] = val * 2;
})
console.log('newArray', newArray)

// map 有 return (ES6)
// react jsx 裡面用到的 map 通常是 Return 元件/組件 component
// component 其實就是一堆 DIV (card, product, userData...)
let mapReturn = arrayA.map((val, i, arr) => {
  return val * 3
})

console.log('mapReturn', mapReturn)
console.log('arrayA', arrayA)

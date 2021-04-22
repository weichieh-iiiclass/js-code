const aObj = { a: 1, b: 'b', c: { p: [1, 2] } }

// 簡單的深拷貝
// undefined,function無法copy
const aCopyObj = JSON.parse(JSON.stringify(aObj))

// 淺拷貝
const bCopyObj = Object.assign({}, aObj)
// 淺拷貝
const cCopyObj = { ...aObj }

// 如果把aObj的p改成p:[888,2]
// aCopyObj會跟著改,因為是深拷貝,所以當初深層的東西都有先拷貝出來
// bCopyObj和cCopyObj不會跟著改,因為是當初淺拷貝沒辦法copy到深層的東西,深層的東西依舊是指標
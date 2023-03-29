// Import แบบที่ 1
// const utils = require('./utils')

// // เรียกใช้งาน utils.js
// utils.sayHello()
// const vat = utils.calculateVat(200,7)
// console.log(vat)

//Import แบบที่ 2 ใช้ Destructuring
const { calculateVat, sayHello } = require('./utils') // Destructuring

sayHello()
const vat2 = calculateVat(300,7)
console.log(vat2)
